import Handlebars from 'handlebars';
import './error.scss';

const Error = () => {
  return Handlebars.compile(`
    <div class="error">
        Мы уже решаем проблему<br>500
        <a href="/home">Вернуться на главную</a>
    </div>
  `)();
};

export default Error;
