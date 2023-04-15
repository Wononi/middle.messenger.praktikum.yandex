import Handlebars from 'handlebars';
import s from'./popup.module.scss';
import {Block} from '../../utils/Block';
import {Button} from '../Button/inedex';
import {CloseBtn} from '../CloseBtn';
import {Input} from '../Input';
import ProfileController from '../../controllers/ProfileController';
import {AvatarForm} from '../AvatarForm';
import controller from '../../controllers/ChatsController';

interface PopupProps {
  title: string
  type: string;
  chatId?: number;
}

export class Popup extends Block<PopupProps> {
  constructor(props: PopupProps) {
    super(props);
  }

  init() {
    this.children.form = new AvatarForm({
      events: {
        submit: (e) => {
          e.preventDefault();
          const avatar = e.target.children[0];
          const form = new FormData(e.target);
          ProfileController.avatar(form);
        }
      }
    });
    this.children.close = new CloseBtn({
      events: {
        click: () => {
          (this.element as HTMLElement).style.display = 'none'
        }
      }
    });
    this.children.chatInput = new Input({
      type: 'text',
      name: 'chat',
    });
    this.children.addUserInput = new Input({
      type: 'text',
      name: 'addUser',
    });
    this.children.removeUserInput = new Input({
      type: 'text',
      name: 'addUser',
    });
    this.children.chatBtn = new Button({
      title: 'Добавить',
      events: {
        click: (e) => {
          e.preventDefault();
          let title = (this.children.chatInput.getContent() as HTMLInputElement).value;
          controller.create(title);
          (this.element as HTMLElement).style.display = 'none';
        }
      }
    });
    this.children.addUserBtn = new Button({
      title: 'Добавить',
      events: {
        click: (e) => {
          e.preventDefault();
          let userId = (this.children.addUserInput.getContent() as HTMLInputElement).value;
          controller.addUserToChat(this.props.chatId, userId);
          (this.element as HTMLElement).style.display = 'none';
        }
      }
    });
    this.children.removeUserBtn = new Button({
      title: 'Удалить',
      events: {
        click: (e) => {
          e.preventDefault();
          let userId = (this.children.addUserInput.getContent() as HTMLInputElement).value;
          controller.deleteUserToChat(this.props.chatId, userId);
          (this.element as HTMLElement).style.display = 'none';
        }
      }
    });
  }

  render() {
    switch (this.props.type) {
      case 'avatar':
        const template1 = Handlebars.compile(`
            <div class=${s.popup}>
              <div class=${s.wrapper}>
                   {{{close}}}
                   <h4>${this.props.title}</h4>
                   {{{form}}}
              </div>
            </div>
        `);
        return this.compile(template1, this.props);
      break;
      case 'createChats':
        const template2 = Handlebars.compile(`
            <div class=${s.popup}>
              <div class=${s.wrapper}>
                   {{{close}}}
                   <h4>${this.props.title}</h4>
                   <p>Имя чата</p>
                   {{{chatInput}}}
                   {{{chatBtn}}}
              </div>
            </div>
        `);
        return this.compile(template2, this.props);
      break;
      case 'addUser':
        const template3 = Handlebars.compile(`
            <div class=${s.popup} id="addUser">
              <div class=${s.wrapper}>
                   {{{close}}}
                   <h4>${this.props.title}</h4>
                   <p>Имя пользователя</p>
                   {{{addUserInput}}}
                   {{{addUserBtn}}}
              </div>
            </div>
        `);
        return this.compile(template3, this.props);
        break;
      case 'deleteUser':
        const template4 = Handlebars.compile(`
            <div class=${s.popup} id="deleteUser">
              <div class=${s.wrapper}>
                   {{{close}}}
                   <h4>${this.props.title}</h4>
                   <p>Имя пользователя</p>
                   {{{addUserInput}}}
                   {{{removeUserBtn}}}
              </div>
            </div>
        `);
        return this.compile(template4, this.props);
        break;
      default:
    }
  }
}
