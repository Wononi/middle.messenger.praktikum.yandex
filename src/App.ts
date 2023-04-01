import {Sigin} from './pages/SignIn/SignIn';
import signUp from './pages/SignUp/SignUp';
import home from './pages/Home/Home';
import profile from './pages/Profile/Profile';
import settings from './pages/Profile/Settings/Settings';
import password from './pages/Profile/Password/Password';
import notFound from './pages/notFound/notFound';
import error from './pages/Error/Error';
import {Navigation} from './pages/Navigation';

const nav = new Navigation({});
const sigin = new Sigin({});

const App = () => {
  switch (window.location.pathname) {
    case '/':
      return nav.getContent()!;
    case '/signin':
      return sigin.getContent();
    case '/signup':
      return signUp();
    case '/home':
      return home();
    case '/home/1':
      return home();
    case '/profile':
      return profile();
    case '/profile/user-data':
      return settings();
    case '/profile/user-password':
      return password();
    case '/500':
      return error();
    case '/404':
      return notFound();
  }
};

export default App;
