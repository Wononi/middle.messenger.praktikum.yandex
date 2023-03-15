import Handlebars from 'handlebars';
import './popup.scss'

const Popup = (type, title, btn ) => {
  if (type === "delete") {
    return Handlebars.compile(`
    <div class="popup">
      <div class="popup__wrapper">
        <h4>${title}</h4>
        <p>Имя пользователя</p>
        <input type="text">
        <button class="delete">${btn}</button>
      </div>
    </div>
  `)()
  }

  if (type !== "avatar") {
    return Handlebars.compile(`
    <div class="popup">
      <div class="popup__wrapper">
        <h4>${title}</h4>
        <p>Имя пользователя</p>
        <input type="text">
        <button>${btn}</button>
      </div>
    </div>
  `)()
  }

  return Handlebars.compile(`
    <div class="popup">
        <div class="popup__wrapper">
            <h4>${title}</h4>
            <a href="#">Выбрать файл<br>на компьютере</a>
            <button>${btn}</button>
        </div>
    </div>
  `)()
}

export default Popup