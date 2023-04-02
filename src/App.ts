import {Sigin} from './pages/SignIn';
import {SigUp} from './pages/SignUp';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Settings} from './pages/Profile/Settings';
import {Password} from './pages/Profile/Password';
import {NotFound} from './pages/notFound';
import {Navigation} from './pages/Navigation';
import {Error} from './pages/Error';

const nav = new Navigation({});
const sigin = new Sigin({});
const signup = new SigUp({});
const home = new Home({});
const profile = new Profile({});
const settings = new Settings({});
const password = new Password({});
const notFound = new NotFound({});
const error = new Error({});

const App = () => {
  switch (window.location.pathname) {
    case '/':
      return nav.getContent()!;
    case '/signin':
      return sigin.getContent();
    case '/signup':
      return signup.getContent();
    case '/home':
      return home.getContent();
    case '/home/1':
      return home.getContent();
    case '/profile':
      return profile.getContent();
    case '/profile/user-data':
      return settings.getContent();
    case '/profile/user-password':
      return password.getContent();
    case '/500':
      return error.getContent();
    case '/404':
      return notFound.getContent();
  }
};

export default App;
