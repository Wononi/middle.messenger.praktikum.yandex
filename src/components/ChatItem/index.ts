import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './ChatItem.module.scss';

interface ChatItemProps {
  name: string;
  message: string;
  time: string;
  missMessage: string;
  img: string;
  href: string;
}

export class ChatItem extends Block<ChatItemProps> {
  constructor(props: ChatItemProps) {
    super('a', props);
  }

  init() {
    this.element?.classList.add(s.home__chat_list__item);
    this.element?.setAttribute('href', this.props.href);
  }

  render() {
    const template = Handlebars.compile(`
        <img src="${this.props.img}" alt="profile">
        <p class=${s.home__chat_list__item_name}>${this.props.name}</p>
        <p class=${s.home__chat_list__item_message}>${this.props.message}</p>
        <p class=${s.home__chat_list__item_time}>${this.props.time}</p>
        <p class=${s.home__chat_list__item_miss}>${this.props.missMessage}</p>
    `);

    return this.compile(template, this.props);
  }
}
