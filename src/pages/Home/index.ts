import Handlebars from 'handlebars';
import s from './home.module.scss';
import {ChatPage} from '../../components/Chat';
import {Block} from '../../utils/Block';
import {SidebarItem} from '../../components/SidebarItem';
import {Input} from '../../components/Input';
import {ChatItem} from '../../components/ChatItem';
import {withStore} from '../../utils/Store';
import {Popup} from '../../components/Popup';
import {ProfileItem} from '../../components/ProfileItem';

interface HomeProps {

}

export class Home extends Block<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  id = null;
  chatName;

  init() {
    this.children.chatItems = Object.entries(this.props).map(item => {
      return new ChatItem({name: item[1].title, message: item[1].last_message, missMessage: item[1].unread_count, img: item[1].avatar, href: item[1].id});
    });
    this.activeChat();
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
      events: {
        click: () => {
          this.children.createChats.getContent().style.display = 'block'
        }
      }
    });
    this.children.createChats = new Popup({
      type: 'createChats',
      title: 'Создать чат'
    })
    this.children.search = new Input({
      type: 'search',
      placeholder: 'Поиск',
    });
    this.children.chat = new ChatPage({
      chatName: this.chatName,
      chatId: this.id,
    })
  }

  activeChat () {
    let result = (this.children.chatItems as ChatItem[]).some((item) => {
      this.id = item.props.href;
      this.chatName = item.props.name;
      return '/messenger/' + item.props.href === window.location.pathname;
    })
    return result
  }

  protected componentDidUpdate(oldProps: HomeProps, newProps: HomeProps): boolean {
    this.children.chatItems = Object.entries(this.props).map(item => {
      return new ChatItem({name: item[1].title, message: item[1].last_message, missMessage: item[1].unread_count, img: item[1].avatar, href: item[1].id});
    });
    return true;
  }

  render() {
    const template = Handlebars.compile(`
        <div class=${s.home}>
          {{{createChats}}}
          <div class=${s.home__sidebar}>
              {{{profileLink}}}
              {{{addUser}}}
          </div>
          <div class=${s.home__chat_list}>
              <div class=${s.home__chat_list__search}>
                  {{{search}}}
              </div>
              {{#each chatItems}}
                  {{{this}}}
              {{/each}}
          </div>
          <div class=${s.home__chat}>
          {{#if ${this.activeChat()}
          }} 
            {{{chat}}}
          {{else}}
            <p>Выберите чат, чтобы начать общение</p>
          {{/if}}
          </div>
        </div>
    `);

    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({ ...state.chats }))

export const HomePage = withUser(Home);


