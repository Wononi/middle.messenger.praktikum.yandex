import Handlebars from 'handlebars';
import s from './signin.module.scss';
import {Block} from '../../utils/Block';
import {FormLogin} from '../../components/FormLogin';
import AuthController from '../../controllers/AuthController';
import {SigninData} from '../../api/AuthAPI';
import {Link} from '../../components/Link';

interface SignInProps {

}

export class Sigin extends Block {
    constructor(props: SignInProps) {
        super(props);
    }

    init() {
        this.children.formLogin = new FormLogin({
            events: {
                submit: (e) => {
                    e.preventDefault();
                    let login = e.srcElement[0].value;
                    const test = document.createElement('div');
                    test.textContent = login;
                    login = test.innerHTML;
                    let password = e.srcElement[1].value;
                    const test2 = document.createElement('div');
                    test2.textContent = password;
                    password = test2.innerHTML;
                    const signInObj = {
                        "login": login,
                        "password": password
                    };
                    AuthController.signin(signInObj as SigninData);
                },
            },
        });
        this.children.link = new Link({
            to: '/sign-up',
            label: 'Нет аккаунта?',
        });
    }

    render() {
        const template = Handlebars.compile(`
      <div class=${s.signin}>
          <div class=${s.signin__wrapper}>
            <h2>Вход</h2>
            {{{formLogin}}}
            {{{link}}}
          </div>
      </div>
  `);

        return this.compile(template, this.props);
    }
}
