import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './ChatHeader.module.scss';
import {ChatSettings} from '../ChatSettings';
import {Popup} from '../Popup';

interface ChatHeaderProps {
  src: string;
  chatName: string;
}

export class ChatHeader extends Block<ChatHeaderProps> {
    constructor(props: ChatHeaderProps) {
        super(props);
    }

    init() {
        this.children.settings = new ChatSettings({});
    }

    render() {
        const template = Handlebars.compile(`
        <div class=${s.chat__header}>
          <img src=${this.props.src} alt="profile">
          <p>${this.props.chatName}</p>
          {{{settings}}}
          <div class=${s.chat__header_popup} id="deleteUser">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 8L4.22865 11.7714L3.52154 11.0642L7.29289 7.29289L4.22865 4.22865L4.93575 3.52154L8 6.58579L11.064 3.52177L11.7711 4.22888L8.70711 7.29289L12.4782 11.064L11.7711 11.7711L8 8Z"
                        fill="black"/>
              </svg>
              <p id="deleteUserP">Удалить пользователя</p>
          </div>
        </div>
    `);

        return this.compile(template, this.props);
    }
}
