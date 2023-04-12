import Handlebars from 'handlebars';
import s from './signup.module.scss';
import {Block} from '../../utils/Block';
import {FormRegister} from '../../components/FormRegister';
import {HTTPTransport} from '../../utils/API';

const api = new HTTPTransport()

interface SignUpProps {

}

const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const NAME_REGEXP = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
const TEL_REGEXP = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const isEmailValid = (value) => {
  return EMAIL_REGEXP.test(value);
};
const isNameValid = (value) => {
  return NAME_REGEXP.test(value);
};

const isTelValid = (value) => {
  return TEL_REGEXP.test(value);
};

const errorMessage = (input, label) => {
  input.getContent()?.classList.add(s.invalid);
  label.setProps({label: `Не верный ${input.props.name}`});
  label.getContent()?.classList.remove(s.hide);
};

const hideErrorMessage = (input, label) => {
  input.getContent()?.classList.remove(s.invalid);
  label.setProps({label: `Это поле обязательно для заполнения`});
  label.getContent()?.classList.add(s.hide);
};

const validRegister = (formNode, children) => {
  const email = children.email;
  const emailLabel = children.emailLabel;
  const login = children.login;
  const loginLabel = children.loginLabel;
  const firstName = children.firstName;
  const firstNameLabel = children.firstNameLabel;
  const secondName = children.secondName;
  const secondNameLabel = children.secondNameLabel;
  const phone = children.phone;
  const phoneLabel = children.phoneLabel;
  const password = children.password;
  const passwordLabel = children.passwordLabel;
  const passwordRepeat = children.passwordRepeat;
  const passwordRepeatLabel = children.passwordRepeatLabel;

  const {elements} = formNode;

  const data = Array.from(elements)
      .map((element) => {
        const {name, type} = element;
        const value = type === 'checkbox' ? element.checked : element.value;

        return {name, value};
      })
      .filter((item) => !!item.name);

  data.map((i) => {
    if (i.name === 'email') {
      hideErrorMessage(email, emailLabel);
      if (!isEmailValid(i.value)) {
        errorMessage(email, emailLabel);
        throw new Error('Email not valid');
      }
    }
    if (i.name === 'login') {
      if (i.value.length < 3 || i.value.length > 20 || !/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(i.value)) {
        errorMessage(login, loginLabel);
        throw new Error('Login not valid');
      }
    }
    if (i.name === 'first_name') {
      hideErrorMessage(firstName, firstNameLabel);
      if (!isNameValid(i.value) || i.value.charAt(0) !== i.value.charAt(0).toUpperCase()) {
        errorMessage(firstName, firstNameLabel);
        throw new Error('First name not valid');
      }
    }
    if (i.name === 'second_name') {
      hideErrorMessage(secondName, secondNameLabel);
      if (!isNameValid(i.value) || i.value.charAt(0) !== i.value.charAt(0).toUpperCase()) {
        errorMessage(secondName, secondNameLabel);
        throw new Error('Second name not valid');
      }
    }
    if (i.name === 'phone') {
      hideErrorMessage(phone, phoneLabel);
      if (!isTelValid(i.value)) {
        errorMessage(phone, phoneLabel);
        throw new Error('Phone name not valid');
      }
    }
    if (i.name === 'password') {
      hideErrorMessage(password, passwordLabel);
      hideErrorMessage(passwordRepeat, passwordRepeatLabel);
      if (password.getContent().value !== passwordRepeat.getContent().value) {
        errorMessage(password, passwordLabel);
        errorMessage(passwordRepeat, passwordRepeatLabel);
        throw new Error('Passwords don\'t match');
      }
    }
  });

  return Object.fromEntries(data.map((n) => [n.name, n.value]));
};

export class SigUp extends Block<SignUpProps> {
  constructor(props: SignUpProps) {
    super('div', props);
  }

  init() {
    this.children.formRegister = new FormRegister({
      events: {
        submit: (e) => {
          e.preventDefault();
          let obj1 = validRegister(e.target, this.children.formRegister.children)
          let obj2 = {
            "first_name": obj1.first_name,
            "second_name": obj1.second_name,
            "login": obj1.login,
            "email": obj1.email,
            "password": obj1.password,
            "phone": obj1.phone
          }
          console.log(JSON.stringify(obj2));
          api.post('/auth/signup', {data: JSON.stringify(obj2), headers: {'Content-Type': 'application/json'}})
        },
      },
    });
  }

  render() {
    const template = Handlebars.compile(`
      <div class=${s.signup}>
        <div class=${s.signup__wrapper}>
            <h2>Регистрация</h2>
            {{{formRegister}}}
            <a href="/">Войти</a>
        </div>
    </div>
    `);

    return this.compile(template, this.props);
  }
}
