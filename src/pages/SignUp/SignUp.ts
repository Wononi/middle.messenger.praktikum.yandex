import Handlebars from 'handlebars';
import './signup.scss';

const SignUp = () => {
  return Handlebars.compile(`
    <div class="signup">
        <div class="signup__wrapper">
            <h2>Регистрация</h2>
            <form>
                <p>Почта</p>
                <input name="email" type="email">
                <p>Логин</p>
                <input name="login" type="text">
                <p>Имя</p>
                <input name="first_name" type="text">
                <p>Фамилия</p>
                <input name="second_name" type="text">
                <p>Телефон</p>
                <input name="phone" type="tel">
                <p>Пароль</p>
                <input name="password" type="password">
                <p>Пароль (ещё раз)</p>
                <input name="password" type="password">
                <button>Зарегистрироваться</button>
            </form>
            <a href="/">Войти</a>
        </div>
    </div>
  `)();
};

export default SignUp;
