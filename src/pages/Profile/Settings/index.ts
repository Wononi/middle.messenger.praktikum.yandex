import Handlebars from 'handlebars';
import {Block} from '../../../utils/Block';
import s from '../profile.module.scss';
import {ProfileItem} from '../../../components/ProfileItem';
import {withStore} from '../../../utils/Store';
import {Button} from '../../../components/Button/inedex';
import {Input} from '../../../components/Input';
import ProfileController from '../../../controllers/ProfileController';
import {SettingsData} from '../../../api/ProfileAPI';
import {ProfileAvatar} from '../../../components/ProfileAvatar';
import {Popup} from '../../../components/Popup';

interface SettingsProps {
  phone: string;
  display_name: string;
  second_name: string;
  first_name: string;
  login: string;
  email: string;
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

const userFields = ['first_name', 'second_name', 'display_name', 'login', 'email', 'phone'] as Array<keyof SettingsProps>;

class Settings extends Block<SettingsProps> {
    constructor(props: SettingsProps) {
        super(props);
    }

    init() {
        this.children.email = new ProfileItem({
            isSettings: true,
            name: 'Почта',
            inputName: 'email',
            inputType: 'email',
            inputValue: this.props.email,
            events: {
                blur: (e) => {
                    if (isEmailValid(e.target.value)) {
                        console.log('Email корректен');
                    } else {
                        alert('Не подходящий email');
                    }
                },
            },
        });
        this.children.login = new ProfileItem({
            isSettings: true,
            name: 'Логин',
            inputName: 'login',
            inputType: 'text',
            inputValue: this.props.login,
            events: {
                blur: (e) => {
                    if (e.target.value < 3 || e.target.value > 20 || !/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(e.target.value)) {
                        alert('Логин введен не верно');
                    } else {
                        console.log('Login корректен');
                    }
                },
            },
        });
        this.children.firstName = new ProfileItem({
            isSettings: true,
            name: 'Имя',
            inputName: 'first_name',
            inputType: 'text',
            inputValue: this.props.first_name,
            events: {
                blur: (e) => {
                    if (!isNameValid(e.target.value) || e.target.value.charAt(0) !== e.target.value.charAt(0).toUpperCase()) {
                        alert('Имя введено не верно');
                    } else {
                        console.log('Имя корректно');
                    }
                },
            },
        });
        this.children.secondName = new ProfileItem({
            isSettings: true,
            name: 'Фамилия',
            inputName: 'second_name',
            inputType: 'text',
            inputValue: this.props.second_name,
            events: {
                blur: (e) => {
                    if (!isNameValid(e.target.value) || e.target.value.charAt(0) !== e.target.value.charAt(0).toUpperCase()) {
                        alert('Фамилия введено не верно');
                    } else {
                        console.log('Фамилия корректна');
                    }
                },
            },
        });
        this.children.name = new ProfileItem({
            isSettings: true,
            name: 'Имя в чате',
            inputName: 'display_name',
            inputType: 'text',
            inputValue: this.props.display_name,
            events: {
                blur: (e) => {
                    if (!isNameValid(e.target.value) || e.target.value.charAt(0) !== e.target.value.charAt(0).toUpperCase()) {
                        alert('Имя в чате введено не верно');
                    } else {
                        console.log('Имя в чате корректно');
                    }
                },
            },
        });
        this.children.phone = new ProfileItem({
            isSettings: true,
            name: 'Телефон',
            inputName: 'phone',
            inputType: 'tel',
            inputValue: this.props.phone,
            events: {
                blur: (e) => {
                    if (isTelValid(e.target.value)) {
                        console.log('Телефон корректен');
                    } else {
                        alert('Телефон введен не верно');
                    }
                },
            },
        });
        this.children.button = new Button({
            title: 'Сохранить',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const values = Object
                        .values(this.children)
                        .filter(child => child instanceof ProfileItem)
                        .map((child) => ([(child.children.input as Input).getName(), (child.children.input as Input).getValue()]));

                    const data = Object.fromEntries(values);
                    ProfileController.settings(data as SettingsData);
                }
            }
        });
        this.children.avatar = new ProfileAvatar({
            src: 'https://ya-praktikum.tech/api/v2/resources' + this.props.avatar,
            isAvatar: true,
            events: {
                click: () => {
                    this.children.popup.getContent().style.display = 'block';
                }
            }
        });
        this.children.popup = new Popup({
            title: 'Загрузите файл',
            type: 'avatar'
        });
    }

    render() {
        const template = Handlebars.compile(`
      <div class=${s.profile}>
        {{{popup}}}
        <div class=${s.profile__sidebar}>
            <a href="/profile">
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="27.5" cy="27.5" r="27.5" fill="black"/>
                  <path d="M16.0072 27.3876C15.4214 27.9734 15.4214 28.9232 16.0072 29.509L25.5532 39.0549C26.1389 39.6407 27.0887 39.6407 27.6745 39.0549C28.2603 38.4691 28.2603 37.5194 27.6745 36.9336L19.1892 28.4483L27.6745 19.963C28.2603 19.3772 28.2603 18.4275 27.6745 17.8417C27.0887 17.2559 26.1389 17.2559 25.5532 17.8417L16.0072 27.3876ZM17.0679 29.9483H37.9299V26.9483H17.0679V29.9483Z"
                        fill="white"/>
              </svg>
            </a>
        </div>
        <div class=${s.profile__content}>
            {{{avatar}}}
            <h3>Иван</h3>
            {{{email}}}
            {{{login}}}
            {{{firstName}}}
            {{{secondName}}}
            {{{name}}}
            {{{phone}}}
            {{{button}}}
        </div>
      </div>
    `);
        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }));

export const SettingsPage = withUser(Settings);
