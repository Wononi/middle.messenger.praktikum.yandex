import './style/index.scss';
import { Sigin } from './pages/SignIn';
import { SigUp } from './pages/SignUp';
import {HomePage} from './pages/Home';
import { ProfilePage } from './pages/Profile';
import { SettingsPage } from './pages/Profile/Settings';
import { PasswordPage } from './pages/Profile/Password';
import { NotFound } from './pages/notFound';
import { Navigation } from './pages/Navigation';
import { Error } from './pages/Error';
import Router from './utils/Router';
import AuthController from './controllers/AuthController';
import controller from './controllers/ChatsController';
import store from './utils/Store';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/profile',
  Messenger = '/messenger',
  test = '/messenger/10287',
  Settings = '/settings',
  Password = '/password',
  SERVERERROR = '/error',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, Sigin)
    .use(Routes.Register, SigUp)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, HomePage)
    .use(Routes.test, HomePage)
    .use(Routes.Settings, SettingsPage)
    .use(Routes.Password, PasswordPage)
    .use(Routes.SERVERERROR, Error)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {

    await AuthController.fetchUser();
    await controller.fetchChats();
    store.getState().chats.map(item => {
      Router.use('/messenger/' + item.id, HomePage)
    })

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Messenger)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
