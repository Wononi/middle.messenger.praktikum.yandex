import Handlebars, {logger} from 'handlebars';
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

interface PasswordProps {}

class Password extends Block<PasswordProps> {
  constructor(props: PasswordProps) {
    super(props);
  }

  init() {
    this.children.oldPassword = new ProfileItem({
      isSettings: true,
      name: 'Старый пароль',
      inputName: 'oldPassword',
      inputType: 'password',
      events: {
        blur: () => {}
      }
    });
    this.children.newPassword = new ProfileItem({
      isSettings: true,
      name: 'Новый пароль',
      inputName: 'newPassword',
      inputType: 'password',
      events: {
        blur: () => {}
      }
    });
    this.children.button = new Button({
      title: 'Сохранить',
      events: {
        click: (e) => {
          e.preventDefault();
          const values = Object
            .values(this.children)
            .filter(child => child instanceof ProfileItem)
            .map((child) => ([(child.children.input as Input).getName(), (child.children.input as Input).getValue()]))
          const data = Object.fromEntries(values);
          if (data.oldPassword === '' || data.newPassword === '') {
            alert('Поля не могут быть пустыми');
            throw new Error('поле пусто')
          }
          console.log(data);
          ProfileController.password(data as SettingsData);
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
            {{{oldPassword}}}
            {{{newPassword}}}
            {{{button}}}
        </div>
      </div>
    `)
    return this.compile(template, this.props)
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const PasswordPage = withUser(Password);
