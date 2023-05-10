import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import {Input} from '../Input';
import {Button} from '../Button/inedex';
import s from '../../pages/SignIn/signin.module.scss';
import {Label} from '../Label';
import './FormLogin.module.scss'


interface FormProps {
  events: {
    submit: (e) => void;
  }
}

export class FormLogin extends Block<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }
  init() {
    this.element?.setAttribute('onsubmit', this.props.events.submit);
    this.children.login = new Input({
      type: 'text',
      name: 'login',
      id: 'login',
      required: 'required',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.labelLogin.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.labelLogin.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.labelLogin = new Label({
      for: 'login',
      label: 'Пожалуйста введите логин',
      hide: s.hide,
    });
    this.children.password = new Input({
      type: 'password',
      name: 'password',
      id: 'password',
      required: 'required',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.labelPassword.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.labelPassword.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.labelPassword = new Label({
      for: 'password',
      label: 'Пожалуйста введите пароль',
      hide: s.hide,
    });
    this.children.button = new Button({
      title: 'Войти',
      type: 'submit',
    });
  }

  render() {
    const template = Handlebars.compile(`
      <form>
        <p>Логин</p>
        {{{login}}}
        {{{labelLogin}}}
        <p>Пароль</p>
        {{{password}}}
        {{{labelPassword}}}
        {{{button}}}
      </form>
    `);

    return this.compile(template, this.props);
  }
}
