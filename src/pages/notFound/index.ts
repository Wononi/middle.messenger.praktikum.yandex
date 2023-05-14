import Handlebars from 'handlebars';
import s from './notFound.module.scss';
import {Block} from '../../utils/Block';

interface NotFoundProps {}

export class NotFound extends Block<NotFoundProps> {
    constructor(props: NotFoundProps) {
        super('div', props);
    }

    init() {
        this.element?.classList.add(s.notFound);
    }

    render() {
        const template = Handlebars.compile(`
        Страница не найдена<br>404
        <a href="/messenger">Вернуться на главную</a>
    `);
        return this.compile(template, this.props);
    }
}
