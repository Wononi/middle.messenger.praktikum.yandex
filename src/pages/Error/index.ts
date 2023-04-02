import Handlebars from 'handlebars';
import s from './error.module.scss';
import {Block} from '../../utils/Block';

interface ErrorProps {}

export class Error extends Block<ErrorProps> {
  constructor(props: ErrorProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.error)
  }

  render() {
    const template = Handlebars.compile(`
        Мы уже решаем проблему<br>500
        <a href="/home">Вернуться на главную</a>
    `)
    return this.compile(template, this.props)
  }
}
