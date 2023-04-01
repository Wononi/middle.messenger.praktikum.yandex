import Handlebars from 'handlebars';
import './home.scss';
import chatItem from './ChatItem/ChatItem';
import popup from '../../components/Popup/Popup';
import chat from '../../components/Chat/Chat';

const data: object = {
  profiles: [
    {
      img: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
      name: 'Алена',
      message: 'Привет',
      time: '10:50',
      missMessage: 2,
    },
  ],
};

const Home = () => {
  return Handlebars.compile(`
    <div class="home">
        ${popup('', 'Добавить пользователя', 'Добавить')}
        <div id="delete" style="display: none; position: absolute; width: 100%; height: 100%;">
            ${popup('delete', 'Удалить пользователя', 'Удалить')}
        </div>
        <div class="home__sidebar">
            <a href="/profile" class="home__sidebar-item">
              <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="36.5" cy="24.5" r="17" stroke="black" stroke-width="3"/>
                  <path d="M47 38C62.5 42.5 66 66 66 66H7C7 53.2 13.3333 46.3333 16.5 44.5" stroke="black" stroke-width="3"/>
              </svg>
            </a>
            <div class="home__sidebar-item" >
              <svg id="addNewUser" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_5_380)">
                      <circle cx="36.5" cy="36.5" r="35.5" stroke="black" stroke-width="2"/>
                      <line x1="19" y1="35" x2="53.5" y2="35" stroke="black" stroke-width="2"/>
                      <line x1="37" y1="19" x2="37" y2="53.5" stroke="black" stroke-width="2"/>
                  </g>
                  <defs>
                      <clipPath id="clip0_5_380">
                          <rect width="73" height="73" fill="white"/>
                      </clipPath>
                  </defs>
              </svg>
            </div>
        </div>
        <div class="home__chat-list">
            <div class="home__chat-list__search">
                <input type="search" placeholder="Поиск">
            </div>
            ${data.profiles.map((e) => chatItem(e))}
        </div>
        <div class="home__chat">
            ${window.location.pathname === '/home'? `<p>Выберите чат, чтобы начать общение</p>` : chat()}
        </div>
    </div>
  `)();
};

export default Home;

