import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import {Input} from '../Input';
import {Button} from '../Button/inedex';
import {Label} from '../Label';
import s from '../../pages/SignUp/signup.module.scss';

interface FormRegisterProps {
  events: {
    submit: (e) => void;
  }
}

export class FormRegister extends Block<FormRegisterProps> {
  constructor(props: FormRegisterProps) {
    super(props);
  }

  init() {
    this.children.email = new Input({
      type: 'email',
      name: 'email',
      required: true,
      id: 'email',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.emailLabel.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.emailLabel.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.emailLabel = new Label({
      for: 'email',
      label: 'Это поле обязательно для заполнения',
      hide: s.hide,
    });
    this.children.login = new Input({
      type: 'text',
      name: 'login',
      required: true,
      id: 'login',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.loginLabel.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.loginLabel.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.loginLabel = new Label({
      for: 'login',
      label: 'Это поле обязательно для заполнения',
      hide: s.hide,
    });
    this.children.firstName = new Input({
      type: 'text',
      name: 'first_name',
      required: true,
      id: 'first_name',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.firstNameLabel.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.firstNameLabel.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.firstNameLabel = new Label({
      for: 'first_name',
      label: 'Это поле обязательно для заполнения',
      hide: s.hide,
    });
    this.children.secondName = new Input({
      type: 'text',
      name: 'second_name',
      required: true,
      id: 'second_name',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.secondNameLabel.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.secondNameLabel.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.secondNameLabel = new Label({
      for: 'second_name',
      label: 'Это поле обязательно для заполнения',
      hide: s.hide,
    });
    this.children.phone = new Input({
      type: 'tel',
      name: 'phone',
      required: true,
      id: 'phone',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.phoneLabel.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.phoneLabel.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.phoneLabel = new Label({
      for: 'phone',
      label: 'Это поле обязательно для заполнения',
      hide: s.hide,
    });
    this.children.password = new Input({
      type: 'password',
      name: 'password',
      required: true,
      id: 'password',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.passwordLabel.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.passwordLabel.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.passwordLabel = new Label({
      for: 'password',
      label: 'Это поле обязательно для заполнения',
      hide: s.hide,
    });
    this.children.passwordRepeat = new Input({
      type: 'password',
      name: 'passwordRepeat',
      required: true,
      id: 'passwordRepeat',
      events: {
        focus: (e) => {
          if (e.target.value === '') {
            e.target.classList.remove(s.invalid);
            this.children.passwordRepeatLabel.getContent()?.classList.add(s.hide);
          }
        },
        blur: (e) => {
          if (e.target.value === '') {
            e.target.classList.add(s.invalid);
            this.children.passwordRepeatLabel.getContent()?.classList.remove(s.hide);
          }
        },
      },
    });
    this.children.passwordRepeatLabel = new Label({
      for: 'passwordRepeat',
      label: 'Это поле обязательно для заполнения',
      hide: s.hide,
    });
    this.children.button = new Button({
      type: 'submit',
      title: 'Зарегистрироваться',
    });
  }

  render() {
    const template = Handlebars.compile(`
      <form>
      <p>Почта</p>
      {{{email}}}
      {{{emailLabel}}}
      <p>Логин</p>
      {{{login}}}
      {{{loginLabel}}}
      <p>Имя</p>
      {{{firstName}}}
      {{{firstNameLabel}}}
      <p>Фамилия</p>
      {{{secondName}}}
      {{{secondNameLabel}}}
      <p>Телефон</p>
      {{{phone}}}
      {{{phoneLabel}}}
      <p>Пароль</p>
      {{{password}}}
      {{{passwordLabel}}}
      <p>Пароль (ещё раз)</p>
      {{{passwordRepeat}}}
      {{{passwordRepeatLabel}}}
      {{{button}}}
      </form>
    `);

    return this.compile(template, this.props);
  }
}
