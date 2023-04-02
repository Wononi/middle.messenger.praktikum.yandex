import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './ChatMessages.module.scss';

interface ChatMessagesProps {
  isMyMessage: boolean;
  message: string;
}

export class ChatMessages extends Block<ChatMessagesProps> {
  constructor(props: ChatMessagesProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.chat__content);
  }

  render() {
    const template = Handlebars.compile(`
      <p class=${s.chat__content_date}>
          10 марта
      </p>
      ${this.props.isMyMessage ? `<p class=${s.my_message}>${this.props.message}</p>` : `<p class=${s.message}>${this.props.message}</p>`}
    `);

    return this.compile(template, this.props);
  }
}
