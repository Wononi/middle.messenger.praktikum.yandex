import Handlebars from 'handlebars';
import s from './Chat.module.scss';
import {Block} from '../../utils/Block';
import {ChatHeader} from '../ChatHeader';
import {ChatMessages} from '../ChatMessages';
import {ChatFooter} from '../ChatFooter';

interface ChatProps {

}

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.chat);
    this.children.chatHeader = new ChatHeader({
      src: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
      userName: 'Алена',
    });
    this.children.chatMessagesOne = new ChatMessages({
      isMyMessage: false,
      message: 'Привет, как твои дела? Давно не виделись',
    });
    this.children.chatMessagesTwo = new ChatMessages({
      isMyMessage: true,
      message: 'Привет!',
    });
    this.children.chatFooter = new ChatFooter({

    });
  }

  render() {
    const template = Handlebars.compile(`
          {{{chatHeader}}}
          {{{chatMessagesOne}}}
          {{{chatMessagesTwo}}}
          {{{chatFooter}}}
    `);

    return this.compile(template, this.props);
  }
}

