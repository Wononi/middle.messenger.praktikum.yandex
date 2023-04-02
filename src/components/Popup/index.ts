import Handlebars from 'handlebars';
import './popup.scss';
import {Block} from '../../utils/Block';

interface PopupProps {
  title: string
  btn: string;
}

export class Popup extends Block<PopupProps> {
  constructor(props: PopupProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(`
      <div class="popup">
        <div class="popup__wrapper">
          <h4>${this.props.title}</h4>
          <p>Имя пользователя</p>
          <input type="text">
          <button class="delete">${this.props.btn}</button>
        </div>
      </div>
    `);

    return this.compile(template, this.props)
  }
}
