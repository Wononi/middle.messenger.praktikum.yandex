import Handlebars from 'handlebars';
import s from './profile.module.scss';
import {Block} from '../../utils/Block';
import {ProfileItem} from '../../components/ProfileItem';
import {withStore} from '../../utils/Store';
import {Button} from '../../components/Button/inedex';
import AuthController from '../../controllers/AuthController';
import {ProfileAvatar} from '../../components/ProfileAvatar';
import {Popup} from '../../components/Popup';
import {Link} from '../../components/Link';

interface ProfileProps {

}

const userFields = ['id','first_name', 'second_name', 'display_name', 'login', 'email', 'phone'] as Array<keyof ProfileProps>;

class Profile extends Block<ProfileProps> {
  constructor(props:ProfileProps) {
    super(props);
  }

  init() {
    this.children.fields = userFields.map(name => {
      return new ProfileItem({isSettings: false, name, value: this.props[name] });
    });
    this.children.logout = new Button({
      title: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
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
    this.children.linkBack = new Link({
      to: '/messenger',
      label: `
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27.5" r="27.5" fill="black"/>
            <path d="M16.0072 27.3876C15.4214 27.9734 15.4214 28.9232 16.0072 29.509L25.5532 39.0549C26.1389 39.6407 27.0887 39.6407 27.6745 39.0549C28.2603 38.4691 28.2603 37.5194 27.6745 36.9336L19.1892 28.4483L27.6745 19.963C28.2603 19.3772 28.2603 18.4275 27.6745 17.8417C27.0887 17.2559 26.1389 17.2559 25.5532 17.8417L16.0072 27.3876ZM17.0679 29.9483H37.9299V26.9483H17.0679V29.9483Z"
                  fill="white"/>
        </svg>`
    });
    this.children.settingLink = new Link({
      to: '/settings',
      label: 'Изменить данные',
      styleClass: s.profile__content__change_data,
    });
    this.children.passwordLink = new Link({
      to: '/password',
      label: 'Изменить пароль',
      styleClass: s.profile__content__change_data,
    });
  }

  protected componentDidUpdate(oldProps: ProfileProps, newProps: ProfileProps): boolean {
    (this.children.fields as ProfileItem[]).forEach((field, i) => {
      field.setProps({  value: newProps[userFields[i]] });
    });
    return false;
  }

  render() {
    const template = Handlebars.compile(`
      <div class=${s.profile}>
        {{{popup}}}
        <div class=${s.profile__sidebar}>
            {{{linkBack}}}
        </div>
        <div class=${s.profile__content}>
            <div class=${s.profile__content_avatar}>
                {{{avatar}}}
            </div>
            <h3>${this.props.first_name}</h3>
                {{#each fields}}
                    {{{this}}}
                {{/each}}
            {{{settingLink}}}
            {{{passwordLink}}}
            {{{logout}}}
        </div>
      </div>
    `)
    return this.compile(template, this.props)
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(Profile);
