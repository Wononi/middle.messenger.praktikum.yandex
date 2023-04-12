import Handlebars from 'handlebars';
import s from './signin.module.scss';
import {Block} from '../../utils/Block';
import {FormLogin} from '../../components/FormLogin';
import {signIn} from '../../state/user';

interface SignInProps {

}

export class Sigin extends Block {
  constructor(props: SignInProps) {
    super('div', props);
  }

  init() {
    this.children.formLogin = new FormLogin({
      events: {
        submit: (e) => {
          e.preventDefault();
          const signInObj = {
            "login": e.srcElement[0].value,
            "password": e.srcElement[1].value
          }
          signIn(signInObj)
        },
      },
    });
  }

  render() {
    const template = Handlebars.compile(`
    <div class=${s.signin}>
        <div class=${s.signin__wrapper}>
          <h2>Вход</h2>
          {{{formLogin}}}
          <a href="/sign-up">Нет аккаунта?</a>
        </div>
    </div>
  `);

    return this.compile(template, this.props);
  }
}
