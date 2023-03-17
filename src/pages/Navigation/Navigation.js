import Handlebars from 'handlebars'
import './Navigation.scss'

const Navigation = () => {
  return Handlebars.compile(`
    <nav>
        <ul>
            <li>
                <a href="/signin">Войти</a>
            </li>
            <li>
                <a href="/signup">Зарегистрироваться</a>
            </li>
            <li>
                <a href="/home">Главная страница</a>
            </li>
            <li>
                <a href="/home/1">Страница с диалогом</a>
            </li>
            <li>
                <a href="/profile">Профиль</a>
            </li>
            <li>
                <a href="/profile/user-data">Настройки профиля</a>
            </li>
            <li>
                <a href="/profile/user-password">Смена пароля</a>
            </li>
            <li>
                <a href="/500">500</a>
            </li>
            <li>
                <a href="/404">404</a>
            </li>
        </ul>
    </nav>
  `)()
}

export default Navigation