import Handlebars from 'handlebars';
import './notFound.scss';

const notFound = () => {
  return Handlebars.compile(`
    <div class="notFound">
        Страница не найдена<br>404
        <a href="/home">Вернуться на главную</a>
    </div>
  `)();
};

export default notFound;
