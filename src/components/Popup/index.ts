import Handlebars from 'handlebars';
import s from'./popup.module.scss';
import {Block} from '../../utils/Block';
import {Button} from '../Button/inedex';
import {CloseBtn} from '../CloseBtn';
import {Input} from '../Input';
import ProfileController from '../../controllers/ProfileController';
import {AvatarForm} from '../AvatarForm';

interface PopupProps {
  title: string
  type: string;
}

export class Popup extends Block<PopupProps> {
  constructor(props: PopupProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.popup);
    this.children.form = new AvatarForm({
      events: {
        submit: (e) => {
          e.preventDefault();
          const avatar = e.target.children[0];
          const form = new FormData(e.target);
          ProfileController.avatar(form);
          // fetch(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
          //   method: 'PUT',
          //   credentials: 'include', // Нам нужно подставлять cookies
          //   mode: 'cors', // Работаем с CORS
          //   body: form,
          // })
          //   .then(response => response.json())
          //   .then(data => {
          //     console.log(data);
          //     return data;
          //   });
        }
      }
    })
    this.children.close = new CloseBtn({
      events: {
        click: () => {
          (this.element as HTMLElement).style.display = 'none'
        }
      }
    })
  }

  render() {
    switch (this.props.type) {
      case 'avatar':
        const template = Handlebars.compile(`
            <div class=${s.wrapper}>
                 {{{close}}}
                 <h4>${this.props.title}</h4>
                 {{{form}}}
            </div>
        `)
        return this.compile(template, this.props)
    }
  }
}
