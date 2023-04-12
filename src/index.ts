import './style/index.scss';
import { Sigin } from './pages/SignIn';
import { SigUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Profile/Settings';
import { Password } from './pages/Profile/Password';
import { NotFound } from './pages/notFound';
import { Navigation } from './pages/Navigation';
import { Error } from './pages/Error';
import {Router} from './utils/Router';

const route = new Router('#root');

route
  .use('/', Sigin)
  .use('/sign-up', SigUp)
  .use('/settings', Settings)
  .use('/messenger', Home)
  .use('/profile', Profile)
  .use('/password', Password)
  .use('/not-found', NotFound)
  .use('/500', Error)
  .start();


const profile: HTMLElement = document.querySelector('.profile');
const popup: HTMLElement = document.querySelector('.popup');

if (profile) {
  profile.addEventListener('click', (e: Event): void => {
    const currentElem: HTMLElement = <HTMLElement>e.target;
    if (currentElem.classList.value === 'profile__content-avatar') {
      popup.style.display = 'flex';
    } else if (currentElem.classList.value === 'popup' || currentElem.tagName === 'BUTTON') {
      popup.style.display = 'none';
    }
  });
}

const home: HTMLElement = document.querySelector('.home');

if (home) {
  home.addEventListener('click', (e: MouseEvent): void => {
    const currentElem: HTMLElement = <HTMLElement>e.target;
    if (currentElem.id === 'addNewUser') {
      popup.style.display = 'flex';
    } else if (currentElem.classList.value === 'popup' || currentElem.tagName === 'BUTTON') {
      popup.style.display = 'none';
    }
  });
}

const deleteElem: HTMLElement = document.querySelector('#delete');
const deletePopupElem: HTMLElement = document.querySelector('#delete .popup');

if (home) {
  home.addEventListener('click', (e) => {
    const currentElem: HTMLElement = <HTMLElement>e.target;
    if (currentElem.id === 'deleteUser' || currentElem.id === 'deleteUserP') {
      deleteElem.style.display = 'block';
      deletePopupElem.style.display = 'flex';
    } else if (currentElem.classList.value === 'popup' || currentElem.tagName === 'BUTTON' || currentElem.id === 'delete') {
      deleteElem.style.display = 'none';
      popup.style.display = 'none';
    }
  });
}

const chatSettings: HTMLElement = document.querySelector('#chat__settings');
const chatHeaderPopup: HTMLElement = document.querySelector('#deleteUser');

if (chatSettings) {
  chatSettings.addEventListener('click', () => {
    chatHeaderPopup.classList.toggle('showChatHeader');
  });
}

const chatMedia: HTMLElement = document.querySelector('#chat__media');
const chatFooterPopup: HTMLElement = document.querySelector('#chat__footer_popup');

if (chatMedia) {
  chatMedia.addEventListener('click', () => {
    chatFooterPopup.classList.toggle('showChatFooter');
  });
}
