import Handlebars from 'handlebars';
import s from './profile.module.scss';
import {Block} from '../../utils/Block';
import {ProfileItem} from '../../components/ProfileItem';

interface ProfileProps {

}

export class Profile extends Block<ProfileProps> {
  constructor(props:ProfileProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.profile);
    this.children.email = new ProfileItem({
      isSettings: false,
      name: 'Почта',
      value: 'pochta@yandex.ru',
    });
    this.children.login = new ProfileItem({
      isSettings: false,
      name: 'Логин',
      value: 'ivanivanov',
    });
    this.children.firstName = new ProfileItem({
      isSettings: false,
      name: 'Имя',
      value: 'Иван',
    });
    this.children.secondName = new ProfileItem({
      isSettings: false,
      name: 'Фамилия',
      value: 'Иванов',
    });
    this.children.name = new ProfileItem({
      isSettings: false,
      name: 'Имя в чате',
      value: 'Иван',
    });
    this.children.phone = new ProfileItem({
      isSettings: false,
      name: 'Телефон',
      value: '+7 (909) 967 30 30',
    });
  }

  render() {
    const template = Handlebars.compile(`
      <div class=${s.profile__sidebar}>
          <a href="/home">
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.5" cy="27.5" r="27.5" fill="black"/>
                <path d="M16.0072 27.3876C15.4214 27.9734 15.4214 28.9232 16.0072 29.509L25.5532 39.0549C26.1389 39.6407 27.0887 39.6407 27.6745 39.0549C28.2603 38.4691 28.2603 37.5194 27.6745 36.9336L19.1892 28.4483L27.6745 19.963C28.2603 19.3772 28.2603 18.4275 27.6745 17.8417C27.0887 17.2559 26.1389 17.2559 25.5532 17.8417L16.0072 27.3876ZM17.0679 29.9483H37.9299V26.9483H17.0679V29.9483Z"
                      fill="white"/>
            </svg>
          </a>
      </div>
      <div class=${s.profile__content}>
          <div class=${s.profile__content_avatar}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 38C2.89543 38 2 37.1046 2 36H38C38 37.1046 37.1046 38 36 38H4ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z"
                        fill="black" fill-opacity="0.5"/>
              </svg>
          </div>
          <h3>Иван</h3>
          {{{email}}}
          {{{login}}}
          {{{firstName}}}
          {{{secondName}}}
          {{{name}}}
          {{{phone}}}
          <a href="/profile/user-data" class="profile__content-change__data">
              Изменить данные
          </a>
          <a href="/profile/user-password" class="profile__content-change__data">
              Изменить пароль
          </a>
          <a href="/signin" class="signout">
              Выйти
          </a>
      </div>
    `)
    return this.compile(template, this.props)
  }
}

export const profileData: object = {
  item: [
    {
      name: 'Почта',
      value: 'pochta@yandex.ru',
      type: 'email',
      apiName: 'email',
    },
    {
      name: 'Логин',
      value: 'ivanivanov',
      type: 'text',
      apiName: 'login',
    },
    {
      name: 'Имя',
      value: 'Иван',
      type: 'text',
      apiName: 'first_name',
    },
    {
      name: 'Фамилия',
      value: 'Иванов',
      type: 'text',
      apiName: 'second_name',
    },
    {
      name: 'Имя в чате',
      value: 'Иван',
      type: 'text',
      apiName: 'display_name',
    },
    {
      name: 'Телефон',
      value: '+7 (909) 967 30 30',
      type: 'tel',
      apiName: 'phone',
    },
  ],
  passwordData: [
    {
      name: 'Старый пароль',
      password: '123qwe',
      type: 'password',
      apiName: 'oldPassword',
    },
    {
      name: 'Новый пароль',
      password: '',
      type: 'password',
      apiName: 'newPassword',
    },
    {
      name: 'Повторите новый пароль',
      password: '',
      type: 'password',
      apiName: 'newPassword',
    },
  ],
};
