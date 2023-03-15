import Handlebars from 'handlebars';
import './chatitem.scss'

const ChatItem = (e) => {
    return Handlebars.compile(`
        <a href="/home/1" class="home__chat-list__item">
            <img src="${e.img}" alt="profile">
            <p class="home__chat-list__item-name">${e.name}</p>
            <p class="home__chat-list__item-message">${e.message}</p>
            <p class="home__chat-list__item-time">${e.time}</p>
            <p class="home__chat-list__item-miss">${e.missMessage}</p>
        </a>
    `)()
}

export default ChatItem