import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './ChatItem.module.scss';
import {Link} from '../Link';

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
        super(props);
    }

    init() {
        const content = `<img src="${this.props.img ? this.props.img : 'https://cdn.mywebicons.ru/i/webp/b5ab0a58a7c151645502d4e69c58b1fc.webp'}" alt="profile">
          <p class=${s.home__chat_list__item_name}>${this.props.name}</p>
          <p class=${s.home__chat_list__item_message}>${this.props.message ? this.props.message.content : 'Нет сообщений'}</p>
          <p class=${s.home__chat_list__item_miss}>${this.props.missMessage}</p>`;
        this.children.link = new Link({
            label: content,
            to: '/messenger/' + this.props.href,
            styleClass: s.home__chat_list__item
        });
    }

    render() {
        const template = Handlebars.compile(`
        {{{link}}}
    `);

        return this.compile(template, this.props);
    }
}
