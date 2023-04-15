import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './chatSettings.module.scss';
import p from'../Popup/popup.module.scss';

interface ChatSettingsProps {
  events: {
    click: () => void
  }
}

interface SettingsItemProps {
  label: string;
  events: {
    click: () => void;
  }
}

class SettingsItem extends Block<SettingsItemProps> {
  constructor(props: SettingsItemProps) {
    super({
      ...props,
      events: {
        click: (e) => {this.showPopup(e)}
      }
    });
  }

  showPopup(e) {
    const popupAdd = document.querySelector('#addUser');
    const popupDelete = document.querySelector('#deleteUser');
    if (e.target.innerHTML === 'Добавить пользователя') {
      popupAdd.style.display = 'block'
    } else {
      popupDelete.style.display = 'block'
    }
  }

  render() {
    const template = Handlebars.compile(`<p class=${s.settingsItem}>${this.props.label}</p>`);
    return this.compile(template, this.props)
  }
}

export class ChatSettings extends Block<ChatSettingsProps> {
  constructor(props: ChatSettingsProps) {
    super({
      ...props,
      events: {
        click: (e) => {this.show(e)}
      }
    });
  }

  init() {
    this.children.addUser = new SettingsItem({
      label: 'Добавить пользователя'
    });
    this.children.removeUser = new SettingsItem({
      label: 'Удалить пользователя'
    });
  }

  show(e) {
    const chatSettings = document.querySelector('#chatSettings');
    if (e.target.getAttribute('id') === 'svg') {
      chatSettings.classList.toggle((s.show))
    }
  }

  render() {
    const template = Handlebars.compile(`
        <div>
        <svg id="svg" class=${s.chatBtn} width="15" height="35" viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#1E1E1E"/>
            <circle cx="1.5" cy="7.5" r="1.5" fill="#1E1E1E"/>
            <circle cx="1.5" cy="13.5" r="1.5" fill="#1E1E1E"/>
        </svg>
        <div class=${s.chatSettings} id="chatSettings">
            {{{addUser}}}
            {{{removeUser}}}
        </div>
        </div>
    `);

    return this.compile(template, this.props)
  }
}
