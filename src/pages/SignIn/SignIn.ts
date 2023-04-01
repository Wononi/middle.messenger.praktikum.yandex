import Handlebars from 'handlebars';
import s from './signin.module.scss';
import {Block} from '../../utils/Block';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button/inedex';

interface SignInProps {

}

export class Sigin extends Block {
  constructor(props: SignInProps) {
    super('div', props);
  }

  init() {
    this.children.login = new Input({
      type: 'text',
      name: 'login',
      required: 'required',
      events: {
        focus: () => {
          console.log('hi');
        },
      },
    });
    this.children.password = new Input({
      type: 'text',
      name: 'password',
    });
    this.children.button = new Button({
      title: 'Войти',
      type: 'submit',
      events: {
        click: (e) => {
          e.preventDefault();
          console.log('hi');
        },
      },
    });
  }

  render() {
    const template = Handlebars.compile(`
    <div class=${s.signin}>
        <div class=${s.signin__wrapper}>
          <h2>Вход</h2>
          <form onsubmit="testt">
            <p>Логин</p>
            {{{login}}}
            <p>Пароль</p>
            {{{password}}}
            {{{button}}}
          </form>
          <a href="/signup">Нет аккаунта?</a>
        </div>
    </div>
  `);

    return this.compile(template, this.props);
  }
}
