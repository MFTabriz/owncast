var request = require('supertest') 
const Ajv = require("ajv-draft-04")
const jsonfile = require('jsonfile')

request = request('http://127.0.0.1:8080');

var ajv = new Ajv();
var metaSchema = require('ajv/dist/refs/json-schema-draft-04.json');
ajv.addMetaSchema(metaSchema);

ajv.addSchema(require('schema/node_info_2.0_schema.json'))

test('nodeinfo 2.0 is valid', (done) => {
    request.get('/nodeinfo/2.0').expect(200)
        .then((res) => {
            expect(ajv.validate('http://nodeinfo.diaspora.software/ns/schema/2.0#', res.body)).toBe(true);
            done();
        });
});
