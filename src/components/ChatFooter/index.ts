import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './ChatFooter.module.scss';
import {Input} from '../Input';
import {Button} from '../Button/inedex';

interface ChatFooterProps {

}

export class ChatFooter extends Block<ChatFooterProps> {
  constructor(props:ChatFooterProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.chat__footer);
    this.children.input = new Input({
      type: 'text',
      placeholder: 'Сообщение',
      name: 'message',
    });
    this.children.button = new Button({
      title: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14.5" cy="14.5" r="14.5" fill="black"/>
            <path d="M20.7071 15.7071C21.0976 15.3166 21.0976 14.6834 20.7071 14.2929L14.3431 7.92893C13.9526 7.53841 13.3195 7.53841 12.9289 7.92893C12.5384 8.31946 12.5384 8.95262 12.9289 9.34315L18.5858 15L12.9289 20.6569C12.5384 21.0474 12.5384 21.6805 12.9289 22.0711C13.3195 22.4616 13.9526 22.4616 14.3431 22.0711L20.7071 15.7071ZM9 16H20V14H9V16Z"
                  fill="white"/>
        </svg>`,
      type: 'submit',
      events: {
        click: (e) => {
          e.preventDefault();
          if (this.children.input.getContent().value !== '') {
            console.log(this.children.input.getContent().value);
          } else {
            console.log('Поле сообщение пусто');
          }
        },
      },
    });
  }

  render() {
    const template = Handlebars.compile(`
      <svg id="chat__media" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5.68222 11.9956L13.2584 4.4195L14.2012 5.3623L6.62503 12.9384L5.68222 11.9956Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.19638 14.5096L15.7725 6.93341L16.7153 7.87622L9.13919 15.4524L8.19638 14.5096Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M13.5389 19.8523L21.1151 12.2762L22.0579 13.219L14.4817 20.7951L13.5389 19.8523Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16.0531 22.3662L23.6292 14.7901L24.572 15.7329L16.9959 23.3091L16.0531 22.3662Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M16.053 22.3665C13.4379 24.9816 9.20739 24.991 6.60389 22.3875C4.0004 19.7841 4.00982 15.5535 6.62494 12.9384L5.68213 11.9956C2.54399 15.1337 2.53268 20.2104 5.65688 23.3346C8.78107 26.4588 13.8577 26.4475 16.9958 23.3093L16.053 22.3665Z"
            fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M21.1151 12.2762L22.0579 13.219C24.4986 10.7782 24.5074 6.8297 22.0775 4.39978C19.6476 1.96985 15.6991 1.97864 13.2583 4.41942L14.2011 5.36223C16.1189 3.44447 19.2213 3.43756 21.1305 5.34679C23.0397 7.25602 23.0328 10.3584 21.1151 12.2762Z"
            fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.19653 14.51C6.45312 16.2534 6.44684 19.0738 8.1825 20.8094C9.91817 22.5451 12.7385 22.5388 14.4819 20.7954L13.5391 19.8526C12.3187 21.073 10.3445 21.0774 9.12952 19.8624C7.91456 18.6475 7.91895 16.6732 9.13934 15.4528L8.19653 14.51Z"
            fill="#999999"/>
      </svg>
      {{{input}}}
      {{{button}}}
      <div class=${s.chat__footer_popup} id="chat__footer_popup">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V14L7.48057 12.4052C8.48921 12.1362 9.52864 12 10.5725 12H11.4275C12.4714 12 13.5108 12.1362 14.5194 12.4052L20.5 14V4C20.5 2.61929 19.3807 1.5 18 1.5ZM4 20.5C3.43709 20.5 2.91763 20.314 2.49976 20H19.5002C19.0824 20.314 18.5629 20.5 18 20.5H4ZM4 0C1.79086 0 0 1.79086 0 4V18C0 20.2091 1.79086 22 4 22H18C20.2091 22 22 20.2091 22 18V4C22 1.79086 20.2091 0 18 0H4ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
                    fill="black"/>
          </svg>
          <p>Фото и видео</p>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z"
                    fill="black"/>
          </svg>
          <p>Файл</p>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                    fill="black"/>
          </svg>
          <p>Локация</p>
      </div>
    `);

    return this.compile(template, this.props);
  }
}
