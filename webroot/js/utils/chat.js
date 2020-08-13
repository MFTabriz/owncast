export const KEY_USERNAME = 'owncast_username';
export const KEY_AVATAR = 'owncast_avatar';
export const KEY_CHAT_DISPLAYED = 'owncast_chat';
export const KEY_CHAT_FIRST_MESSAGE_SENT = 'owncast_first_message_sent';
export const CHAT_INITIAL_PLACEHOLDER_TEXT = 'Type here to chat, no account necessary.';
export const CHAT_PLACEHOLDER_TEXT = 'Message';
export const CHAT_PLACEHOLDER_OFFLINE = 'Chat is offline.';

export function formatMessageText(message) {
  showdown.setFlavor('github');
  let formattedText = new showdown.Converter({
    emoji: true,
    openLinksInNewWindow: true,
    tables: false,
    simplifiedAutoLink: false,
    literalMidWordUnderscores: true,
    strikethrough: true,
    ghMentions: false,
  }).makeHtml(message);

  formattedText = linkify(formattedText, message);
  formattedText = highlightUsername(formattedText);

  return addNewlines(formattedText);
}

function highlightUsername(message) {
  const username = document.getElementById('self-message-author').value;
	const pattern = new RegExp('@?' + username.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
  return message.replace(pattern, '<span class="highlighted">$&</span>');
}

function linkify(text, rawText) {
  const urls = getURLs(stripTags(rawText));
  if (urls) {
    urls.forEach(function (url) {
      let linkURL = url;

      // Add http prefix if none exist in the URL so it actually
      // will work in an anchor tag.
      if (linkURL.indexOf('http') === -1) {
        linkURL = 'http://' + linkURL;
      }

      // Remove the protocol prefix in the display URLs just to make
      // things look a little nicer.
      const displayURL = url.replace(/(^\w+:|^)\/\//, '');
      const link = `<a href="${linkURL}" target="_blank">${displayURL}</a>`;
      text = text.replace(url, link);

      if (getYoutubeIdFromURL(url)) {
        if (isTextJustURLs(text, [url, displayURL])) {
          text = '';
        } else {
          text += '<br/>';
        }

        const youtubeID = getYoutubeIdFromURL(url);
        text += getYoutubeEmbedFromID(youtubeID);
      } else if (url.indexOf('instagram.com/p/') > -1) {
        if (isTextJustURLs(text, [url, displayURL])) {
          text = '';
        } else {
          text += `<br/>`;
        }
        text += getInstagramEmbedFromURL(url);
      } else if (isImage(url)) {
        if (isTextJustURLs(text, [url, displayURL])) {
          text = '';
        } else {
          text += `<br/>`;
        }
        text += getImageForURL(url);
      }
    }.bind(this));
  }
  return text;
}

function isTextJustURLs(text, urls) {
  for (var i = 0; i < urls.length; i++) {
    const url = urls[i];
    if (stripTags(text) === url) {
      return true;
    }
  }
  return false;
}


function stripTags(str) {
	return str.replace(/<\/?[^>]+(>|$)/g, "");
}

function getURLs(str) {
	var exp = /((\w+:\/\/\S+)|(\w+[\.:]\w+\S+))[^\s,\.]/ig;
	return str.match(exp);
}

function getYoutubeIdFromURL(url) {
	try {
		var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var match = url.match(regExp);

		if (match && match[2].length == 11) {
			return match[2];
		} else {
			return null;
		}
	} catch (e) {
		console.log(e);
		return null;
	}
}

function getYoutubeEmbedFromID(id) {
	return `<iframe class="chat-embed" src="//www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
}

function getInstagramEmbedFromURL(url) {
	const urlObject = new URL(url.replace(/\/$/, ""));
	urlObject.pathname += "/embed";
	return `<iframe class="chat-embed instagram-embed" height="150px" src="${urlObject.href}" frameborder="0" allowfullscreen></iframe>`;
}

function isImage(url) {
	const re = /\.(jpe?g|png|gif)$/;
	const isImage = re.test(url);
	return isImage;
}

function getImageForURL(url) {
	return `<a target="_blank" href="${url}"><img class="embedded-image" src="${url}" width="100%" height="150px"/></a>`;
}


// Taken from https://stackoverflow.com/questions/3972014/get-contenteditable-caret-index-position
export function getCaretPosition(editableDiv) {
	var caretPos = 0,
		sel, range;
	if (window.getSelection) {
		sel = window.getSelection();
		if (sel.rangeCount) {
			range = sel.getRangeAt(0);
			if (range.commonAncestorContainer.parentNode == editableDiv) {
				caretPos = range.endOffset;
			}
		}
	} else if (document.selection && document.selection.createRange) {
		range = document.selection.createRange();
		if (range.parentElement() == editableDiv) {
			var tempEl = document.createElement("span");
			editableDiv.insertBefore(tempEl, editableDiv.firstChild);
			var tempRange = range.duplicate();
			tempRange.moveToElementText(tempEl);
			tempRange.setEndPoint("EndToEnd", range);
			caretPos = tempRange.text.length;
		}
	}
	return caretPos;
}

// Pieced together from parts of https://stackoverflow.com/questions/6249095/how-to-set-caretcursor-position-in-contenteditable-element-div
export function setCaretPosition(editableDiv, position) {
	var range = document.createRange();
	var sel = window.getSelection();
	range.selectNode(editableDiv);
	range.setStart(editableDiv.childNodes[0], position);
	range.collapse(true);

	sel.removeAllRanges();
	sel.addRange(range);
}
