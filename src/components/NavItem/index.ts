import Handlebars from 'handlebars';
import {Block} from '../../utils/Block';
import './NavItme.module.scss';


interface NavItemProps {
  title: string,
  href: string,
}

export class NavItem extends Block {
    constructor(props: NavItemProps) {
        super('li', props);
    }

    render() {
        const template = Handlebars.compile(`
        <a href=${this.props.href}>${this.props.title}</a>
    `);

        return this.compile(template, this.props);
    }
}
