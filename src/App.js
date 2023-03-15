import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Profile/Settings/Settings";
import Password from "./pages/Profile/Password/Password";
import notFound from "./pages/notFound/notFound";
import Error from "./pages/Error/Error";


const App = () => {
  switch (window.location.pathname) {
    case '/':
      return SignIn();
    case '/signup':
      return SignUp();
    case '/home':
      return Home();
    case '/home/1':
      return Home();
    case '/profile':
      return Profile();
    case '/profile/user-data':
      return Settings();
    case '/profile/user-password':
      return Password();
    case '/500':
      return Error();
    default:
      return notFound()
  }
};

export default App;