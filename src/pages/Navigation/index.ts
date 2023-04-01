import Handlebars from 'handlebars';
import './Navigation.module.scss';
import {Block} from '../../utils/Block';
import {NavItem} from '../../components/NavItem';

interface IndexProps {

}

export class Navigation extends Block {
  constructor(props: IndexProps) {
    super('nav', props);
  }

  init() {
    this.children.signin = new NavItem({
      title: 'Войти',
      href: '/signin',
    });
    this.children.signup = new NavItem({
      title: 'Зарегистрироваться',
      href: '/signup',
    });
    this.children.home = new NavItem({
      title: 'Главная страница',
      href: '/home',
    });
    this.children.home1 = new NavItem({
      title: 'Страница с диалогом',
      href: '/home/1',
    });
    this.children.profile = new NavItem({
      title: 'Профиль',
      href: '/profile',
    });
    this.children.profileData = new NavItem({
      title: 'Настройки профиля',
      href: '/profile/user-data',
    });
    this.children.profilepassword = new NavItem({
      title: 'Смена пароля',
      href: '/profile/user-password',
    });
    this.children.error505 = new NavItem({
      title: '500',
      href: '/500',
    });
    this.children.error404 = new NavItem({
      title: '404',
      href: '/404',
    });
  }

  render() {
    const template = Handlebars.compile(`
    <nav>
        <ul>
            {{{signin}}}
            {{{signup}}}
            {{{home}}}
            {{{home1}}}
            {{{profile}}}
            {{{profileData}}}
            {{{profilepassword}}}
            {{{error505}}}
            {{{error404}}}
        </ul>
    </nav>
  `);

    return this.compile(template, this.props);
  }
}
