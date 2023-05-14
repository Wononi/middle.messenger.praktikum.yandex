import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './ChatMessages.module.scss';
import {withStore} from '../../utils/Store';

interface ChatMessagesProps {
  message: string;
  idMessage: number;
}

class ChatMessages extends Block<ChatMessagesProps> {
    constructor(props: ChatMessagesProps) {
        super(props);
    }

    render() {
        const template = Handlebars.compile(`
      <div class=${s.chat__content}>
        ${this.props.idMessage === this.props.id ? `<p class=${s.my_message}> ${this.props.message}</p>` : `<p class=${s.message}> ${this.props.message} </p>`}
      </div>
    `);

        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ChatMessagesComp = withUser(ChatMessages);
