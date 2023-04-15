import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import './SidebarItem.module.scss'
import {Link} from '../Link';

interface SidebarItemProps {
  svg: string;
  href?: string;
  events?: {
    click: () => void;
  }
}


export class SidebarItem extends Block<SidebarItemProps> {
  constructor(props: SidebarItemProps) {
    super(props);
  }

  init() {
    this.children.link = new Link({
      to: this.props.href ? `${this.props.href}` : '',
      label: `${this.props.svg}`
    })
  }

  render() {
    const template = Handlebars.compile(`
      <div>
        {{{link}}}
      </div>
    `);

    return this.compile(template, this.props);
  }
}
