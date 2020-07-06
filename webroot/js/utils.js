const MESSAGE_OFFLINE = 'Stream is offline.';
const MESSAGE_ONLINE = 'Stream is online.';

// const URL_PREFIX = ''; 
const URL_PREFIX = 'https://goth.land'; 
const URL_STATUS = `${URL_PREFIX}/status`;
const URL_STREAM = `${URL_PREFIX}/hls/stream.m3u8`;

const URL_WEBSOCKET = URL_PREFIX 
  ? 'wss://goth.land/entry'
  : `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/entry`;

const POSTER_DEFAULT = `${URL_PREFIX}/img/logo.png`;
const POSTER_THUMB = `${URL_PREFIX}/thumbnail.jpg`;

const SOCKET_MESSAGE_TYPES = {
	CHAT: 'CHAT',
	PING: 'PING'
}

const KEY_USERNAME = 'owncast_username';
const KEY_AVATAR = 'owncast_avatar';
const KEY_CHAT_DISPLAYED = 'owncast_chat';

const VIDEO_ID = 'video';

const URL_OWNCAST = 'https://github.com/gabek/owncast';


function getLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
  }
  return null;
}

function setLocalStorage(key, value) {
  try {
    if (value !== "" && value !== null) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
    return true;
  } catch (e) {}
  return false;
}

function clearLocalStorage(key) {
  localStorage.removeItem(key);
}

// jump down to the max height of a div, with a slight delay
function jumpToBottom(element) {
  if (!element) return;

  setTimeout(() => {
    element.scrollTo({
      top: element.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }, 50, element);
}

// convert newlines to <br>s
function addNewlines(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

function pluralize(string, count) {
  if (count === 1) {
    return string;
  } else {
    return string + "s";
  }
}


// Trying to determine if browser is mobile/tablet.
// Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
function hasTouchScreen() {
  var hasTouchScreen = false;
  if ("maxTouchPoints" in navigator) { 
      hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0; 
  } else {
      var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
          hasTouchScreen = !!mQ.matches;
      } else if ('orientation' in window) {
          hasTouchScreen = true; // deprecated, but good fallback
      } else {
          // Only as a last resort, fall back to user agent sniffing
          var UA = navigator.userAgent;
          hasTouchScreen = (
              /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
              /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
          );
      }
  }
  return hasTouchScreen;
}

// generate random avatar from https://robohash.org
function generateAvatar(hash) {
  const avatarSource = 'https://robohash.org/';
  const optionSize = '?size=80x80';
  const optionSet = '&set=set3'; 
  const optionBg = ''; // or &bgset=bg1 or bg2

  return avatarSource + hash + optionSize + optionSet + optionBg;
}

function generateUsername() {
  return `User ${(Math.floor(Math.random() * 42) + 1)}`;
}

function setVideoPoster(online) {
  const player = videojs(VIDEO_ID);
  var cachebuster = Math.round(new Date().getTime() / 1000);
  const poster = online ? POSTER_THUMB + "?okhi=" + cachebuster : POSTER_DEFAULT;
  player.poster(poster);
}

function getExtraUserContent(path) {
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.ok}`);
      }
      return response.text();
    })
    .then(text => {
      const descriptionHTML = new showdown.Converter().makeHtml(text);
      app.extraUserContent = descriptionHTML;
    })
    .catch(error => {
      console.log("Error", error);
    });
}