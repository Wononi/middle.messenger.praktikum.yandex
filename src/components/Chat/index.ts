import Handlebars from 'handlebars';
import s from './Chat.module.scss';
import {Block} from '../../utils/Block';
import {ChatHeader} from '../ChatHeader';
import {ChatMessagesComp} from '../ChatMessages';
import {ChatFooter} from '../ChatFooter';
import store, {withStore} from '../../utils/Store';
import {Home} from '../../pages/Home';
import {Popup} from '../Popup';
import controllerM from '../../controllers/MessagesController';
import controllerC from '../../controllers/ChatsController';

interface ChatProps {
  chatId: number;
  chatName: string;
  chatImg?: string;
}

class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    this.children.chatHeader = new ChatHeader({
      src: this.props.chatImg ? this.props.chatImg : 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
      chatName: this.props.chatName,
      chatId: this.props.chatId,
    });
    this.children.adduserPopup = new Popup({
      type: 'addUser',
      title: 'Добавить пользователя',
      chatId: this.props.chatId,
    });
    this.children.deleteUserPopup = new Popup({
      type: 'deleteUser',
      title: 'Удалить пользователя',
      chatId: this.props.chatId,
    });
    this.children.deleteChatPopup = new Popup({
      type: 'deleteChat',
      title: 'Удалить чат',
      chatId: this.props.chatId,
    });
    this.children.chatFooter = new ChatFooter({
      id: this.props.chatId
    });
  }

  render() {
    if (this.props[this.props.chatId] && this.props[this.props.chatId].length > 0) {
      this.children.messages = this.props[this.props.chatId].map(message => {
        return new ChatMessagesComp({message: message.content, idMessage: message.user_id})
      });
    }
    // console.log(this.props[10287]);
    const template = Handlebars.compile(`
          <div class=${s.chat}>
            {{{adduserPopup}}}
            {{{deleteUserPopup}}}
            {{{deleteChatPopup}}}
            {{{chatHeader}}}
            {{#each messages}}
                  {{{this}}}
              {{/each}}
            {{{chatFooter}}}
          </div>
    `);

    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({ ...state.messages, ...state.chats }))

export const ChatPage = withUser(Chat);

