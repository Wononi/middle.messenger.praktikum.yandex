import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import './SidebarItem.module.scss'

interface SidebarItemProps {
  svg: string;
  href?: string;
}

export class SidebarItem extends Block<SidebarItemProps> {
  constructor(props: SidebarItemProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(`
      <a ${this.props.href ? `href=${this.props.href}` : ''}>
        ${this.props.svg}
      </a>
    `);

    return this.compile(template, this.props);
  }
}
