import Handlebars from 'handlebars';
import s from './home.module.scss';
import {Chat} from '../../components/Chat';
import {Block} from '../../utils/Block';
import {SidebarItem} from '../../components/SidebarItem';
import {Input} from '../../components/Input';
import {ChatItem} from '../../components/ChatItem';

interface HomeProps {

}

export class Home extends Block<HomeProps> {
  constructor(props: HomeProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.home);
    this.children.profileLink = new SidebarItem({
      svg: `<svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="36.5" cy="24.5" r="17" stroke="black" stroke-width="3"/>
                    <path d="M47 38C62.5 42.5 66 66 66 66H7C7 53.2 13.3333 46.3333 16.5 44.5" stroke="black" stroke-width="3"/>
                </svg>`,
      href: '/profile',
    });
    this.children.addUser = new SidebarItem({
      svg: `<svg id="addNewUser" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </svg>`,
    });
    this.children.search = new Input({
      type: 'search',
      placeholder: 'Поиск',
    });
    this.children.chat1 = new ChatItem({
      img: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
      name: 'Алена',
      message: 'Привет',
      time: '10:50',
      missMessage: 2,
      href: '/home/1',
    });
    this.children.chat = new Chat({

    });
  }

  render() {
    const template = Handlebars.compile(`
          <div class=${s.home__sidebar}>
              {{{profileLink}}}
              {{{addUser}}}
          </div>
          <div class=${s.home__chat_list}>
              <div class=${s.home__chat_list__search}>
                  {{{search}}}
              </div>
              {{{chat1}}}
          </div>
          <div class=${s.home__chat}>
              ${window.location.pathname === '/home'? `<p>Выберите чат, чтобы начать общение</p>` : `{{{chat}}}`}
          </div>
    `);

    return this.compile(template, this.props);
  }
}


