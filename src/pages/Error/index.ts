import Handlebars from 'handlebars';
import s from './error.module.scss';
import {Block} from '../../utils/Block';
import {Link} from '../../components/Link';

interface ErrorProps {}

export class Error extends Block<ErrorProps> {
    constructor(props: ErrorProps) {
        super(props);
    }

    init() {
        this.children.link = new Link({
            to: '/messenger',
            label: 'Вернуться на главную'
        });
    }

    render() {
        const template = Handlebars.compile(`
        <div class=${s.error}>
          Мы уже решаем проблему<br>500
          {{{link}}}
        </div>
    `);
        return this.compile(template, this.props);
    }
}
