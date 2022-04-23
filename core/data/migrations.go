package data

import (
	"database/sql"
	"fmt"
	"strings"
	"time"

	"github.com/owncast/owncast/utils"
	log "github.com/sirupsen/logrus"
	"github.com/teris-io/shortid"
)

func migrateToSchema5(db *sql.DB) {
	// Create the access tokens table.
	createAccessTokenTable(db)

	// Migrate the access tokens from the users table to the access tokens table.
	query := `SELECT id, access_token, created_at FROM users`
	rows, err := db.Query(query)
	if err != nil {
		log.Errorln("error migrating access tokens to schema v5", err)
		return
	}
	if rows.Err() != nil {
		log.Errorln("error migrating access tokens to schema v5", rows.Err())
		return
	}
	defer rows.Close()

	valueStrings := []string{}
	valueArgs := []interface{}{}

	var token string
	var userID string
	var timestamp time.Time
	for rows.Next() {
		if err := rows.Scan(&userID, &token, &timestamp); err != nil {
			log.Error("There is a problem reading the database.", err)
			return
		}

		valueStrings = append(valueStrings, "(?, ?, ?)")
		valueArgs = append(valueArgs, token, userID, timestamp)
	}

	smt := `INSERT INTO user_access_tokens(token, user_id, timestamp) VALUES %s ON CONFLICT DO NOTHING`
	smt = fmt.Sprintf(smt, strings.Join(valueStrings, ","))
	tx, err := db.Begin()
	if err != nil {
		log.Fatalln("Error starting transaction", err)
	}
	_, err = tx.Exec(smt, valueArgs...)
	if err != nil {
		_ = tx.Rollback()
		log.Errorln("Error inserting access tokens", err)
	}
	if err := tx.Commit(); err != nil {
		log.Errorln("Error committing transaction", err)
	}

	// 1. Authenticated bool added to the users table.
	// 2. Access tokens are now stored in their own table.
	//
	// Long story short, the access_token used to be the primary key of the users
	// table. However, now it's going to live in its own table. However, you
	// cannot change the primary key. So we need to create a copy table, then
	// migrate the access tokens, and then move the copy into place.
	createTempTable := `CREATE TABLE IF NOT EXISTS users_copy (
		"id" TEXT,
		"display_name" TEXT NOT NULL,
		"display_color" NUMBER NOT NULL,
		"created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		"disabled_at" TIMESTAMP,
		"previous_names" TEXT DEFAULT '',
		"namechanged_at" TIMESTAMP,
    "authenticated_at" TIMESTAMP,
		"scopes" TEXT,
		"type" TEXT DEFAULT 'STANDARD',
		"last_used" DATETIME DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY (id)
	);CREATE INDEX user_id_disabled_at_index ON users (id, disabled_at);
	CREATE INDEX user_id_index ON users (id);
  CREATE INDEX user_id_disabled_index ON users (id, disabled_at);
	CREATE INDEX user_disabled_at_index ON USERS (disabled_at);`
	_, err = db.Exec(createTempTable)
	if err != nil {
		log.Errorln("error running migration, you may experience issues: ", err)
	}

	_, err = db.Exec(`INSERT INTO users_copy (id, display_name, display_color, created_at, disabled_at, previous_names, namechanged_at, scopes, type, last_used)
  SELECT id, display_name, display_color, created_at, disabled_at, previous_names, namechanged_at, scopes, type, last_used FROM users;`)
	if err != nil {
		log.Errorln("error running migration, you may experience issues: ", err)
	}

	_, err = db.Exec(`PRAGMA foreign_keys = OFF;DROP TABLE "users";ALTER TABLE "users_copy" RENAME TO users;PRAGMA foreign_keys = ON;`)
	if err != nil {
		log.Errorln("error running migration, you may experience issues: ", err)
	}
}

func migrateToSchema4(db *sql.DB) {
	// We now save the follow request object.
	stmt, err := db.Prepare("ALTER TABLE ap_followers ADD COLUMN request_object BLOB")
	if err != nil {
		log.Errorln("Error running migration. This may be because you have already been running a dev version.", err)
		return
	}
	defer stmt.Close()

	_, err = stmt.Exec()
	if err != nil {
		log.Warnln(err)
	}
}

func migrateToSchema3(db *sql.DB) {
	// Since it's just a backlog of chat messages let's wipe the old messages
	// and recreate the table.

	// Drop the old messages table
	stmt, err := db.Prepare("DROP TABLE messages")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec()
	if err != nil {
		log.Warnln(err)
	}

	// Recreate it
	CreateMessagesTable(db)
}

func migrateToSchema2(db *sql.DB) {
	// Since it's just a backlog of chat messages let's wipe the old messages
	// and recreate the table.

	// Drop the old messages table
	stmt, err := db.Prepare("DROP TABLE messages")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec()
	if err != nil {
		log.Warnln(err)
	}

	// Recreate it
	CreateMessagesTable(db)
}

func migrateToSchema1(db *sql.DB) {
	// Since it's just a backlog of chat messages let's wipe the old messages
	// and recreate the table.

	// Drop the old messages table
	stmt, err := db.Prepare("DROP TABLE messages")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec()
	if err != nil {
		log.Warnln(err)
	}

	// Recreate it
	CreateMessagesTable(db)

	// Migrate access tokens to become chat users
	type oldAccessToken struct {
		accessToken string
		displayName string
		scopes      string
		createdAt   time.Time
		lastUsedAt  *time.Time
	}

	oldAccessTokens := make([]oldAccessToken, 0)

	query := `SELECT * FROM access_tokens`

	rows, err := db.Query(query)
	if err != nil || rows.Err() != nil {
		log.Errorln("error migrating access tokens to schema v1", err, rows.Err())
		return
	}
	defer rows.Close()

	for rows.Next() {
		var token string
		var name string
		var scopes string
		var timestampString string
		var lastUsedString *string

		if err := rows.Scan(&token, &name, &scopes, &timestampString, &lastUsedString); err != nil {
			log.Error("There is a problem reading the database.", err)
			return
		}

		timestamp, err := time.Parse(time.RFC3339, timestampString)
		if err != nil {
			return
		}

		var lastUsed *time.Time
		if lastUsedString != nil {
			lastUsedTime, _ := time.Parse(time.RFC3339, *lastUsedString)
			lastUsed = &lastUsedTime
		}

		oldToken := oldAccessToken{
			accessToken: token,
			displayName: name,
			scopes:      scopes,
			createdAt:   timestamp,
			lastUsedAt:  lastUsed,
		}

		oldAccessTokens = append(oldAccessTokens, oldToken)
	}

	// Recreate them as users
	for _, token := range oldAccessTokens {
		color := utils.GenerateRandomDisplayColor()
		if err := insertAPIToken(db, token.accessToken, token.displayName, color, token.scopes); err != nil {
			log.Errorln("Error migrating access token", err)
		}
	}
}

func insertAPIToken(db *sql.DB, token string, name string, color int, scopes string) error {
	log.Debugln("Adding new access token:", name)

	id := shortid.MustGenerate()

	tx, err := db.Begin()
	if err != nil {
		return err
	}
	stmt, err := tx.Prepare("INSERT INTO users(id, access_token, display_name, display_color, scopes, type) values(?, ?, ?, ?, ?, ?)")
	if err != nil {
		return err
	}
	defer stmt.Close()

	if _, err = stmt.Exec(id, token, name, color, scopes, "API"); err != nil {
		return err
	}

	if err = tx.Commit(); err != nil {
		return err
	}

	return nil
}
