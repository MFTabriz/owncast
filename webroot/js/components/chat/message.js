import { h, Component } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(h);

import { messageBubbleColorForString } from '../../utils/user-colors.js';
import { formatMessageText } from '../../utils/chat.js';
import { generateAvatar } from '../../utils/helpers.js';
import { SOCKET_MESSAGE_TYPES } from '../../utils/websocket.js';

export default class Message extends Component {
  render(props) {
    const { message, username } = props;
    const { type } = message;

    if (type === SOCKET_MESSAGE_TYPES.CHAT) {
      const { image, author, body } = message;
      const formattedMessage = formatMessageText(body, username);
      const avatar = image || generateAvatar(author);

      const authorColor = messageBubbleColorForString(author);
      const avatarBgColor = { backgroundColor: authorColor };
      const authorTextColor = { color: authorColor };
      return (
        html`
          <div class="message flex flex-row align-start p-3">
            <div
              class="message-avatar rounded-full flex items-center justify-center mr-3"
              style=${avatarBgColor}
            >
              <img src=${avatar} class="p-1" />
            </div>
            <div class="message-content text-sm break-words">
              <div class="message-author text-white font-bold" style=${authorTextColor}>
                ${author}
              </div>
              <div
                class="message-text text-gray-300 font-normal"
                dangerouslySetInnerHTML=${
                  { __html: formattedMessage }
                }
              ></div>
            </div>
        </div>
      `);
    } else if (type === SOCKET_MESSAGE_TYPES.NAME_CHANGE) {
      const { oldName, newName, image } = message;
      return (
        html`
          <div class="message flex align-start p3">
            <div class="message-content text-sm">
              <img class="mr-2" src=${image} />
              <div class="text-white text-center">
                <span class="font-bold">${oldName}</span> is now known as <span class="font-bold">${newName}</span>.
              </div>
            </div>
          </div>
        `
      );
    }
  }
}
