import './style/index.scss';
import { Sigin } from './pages/SignIn';
import { SigUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { ProfilePage } from './pages/Profile';
import { SettingsPage } from './pages/Profile/Settings';
import { PasswordPage } from './pages/Profile/Password';
import { NotFound } from './pages/notFound';
import { Navigation } from './pages/Navigation';
import { Error } from './pages/Error';
import Router from './utils/Router';
import AuthController from './controllers/AuthController';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/profile',
  Messenger = '/messenger',
  Settings = '/settings',
  Password = '/password',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, Sigin)
    .use(Routes.Register, SigUp)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, Home)
    .use(Routes.Settings, SettingsPage)
    .use(Routes.Password, PasswordPage)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
