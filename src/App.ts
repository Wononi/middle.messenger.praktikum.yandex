import { Sigin } from './pages/SignIn';
import { SigUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Profile/Settings';
import { Password } from './pages/Profile/Password';
import { NotFound } from './pages/notFound';
import { Navigation } from './pages/Navigation';
import { Error } from './pages/Error';

const App = () => {
    switch (window.location.pathname) {
    case '/':
        return new Navigation({}).getContent();
    case '/signin':
        return new Sigin({}).getContent();
    case '/signup':
        return new SigUp({}).getContent();
    case '/home':
        return new Home({}).getContent();
    case '/home/1':
        return new Home({}).getContent();
    case '/profile':
        return new Profile({}).getContent();
    case '/profile/user-data':
        return new Settings({}).getContent();
    case '/profile/user-password':
        return new Password({}).getContent();
    case '/500':
        return new Error({}).getContent();
    case '/404':
        return new NotFound({}).getContent();
    }
};

export default App;
