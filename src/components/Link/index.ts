import {Block} from '../../utils/Block';
import {PropsWithRouter, withRouter} from '../../hocs/withRouter';
import Handlebars from 'handlebars';
import s from './link.module.scss';

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  styleClass?: string;
  events: {
    click: () => void;
  };
}

class BaseLink extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super({
            ...props,
            events: {
                click: () => this.navigate()
            }}
        );
    }

    navigate() {
        this.props.router.go(this.props.to);
    }

    render() {
        const template = Handlebars.compile(`<span ${this.props.styleClass ? `class=${s.link, this.props.styleClass}` : `class=${s.link}`}>{{{label}}}</span>`);

        return this.compile(template, this.props);
    }
}

export const Link = withRouter(BaseLink);
