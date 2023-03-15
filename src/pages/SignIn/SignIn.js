import Handlebars from 'handlebars'
import './signin.scss'

const SignIn = () => {
  return Handlebars.compile(`
    <div class="signin">
        <div class="signin__wrapper">
          <h2>Вход</h2>
          <form>
            <p>Логин</p>
            <input type="text" name="login">
            <p>Пароль</p>
            <input type="text" name="password">
            <button>Войти</button>
          </form>
          <a href="/signup">Нет аккаунта?</a>
        </div>
    </div>
  `)()
}

export default SignIn