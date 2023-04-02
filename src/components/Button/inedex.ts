import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import './Button.module.scss';

interface ButtonProps {
  title: string;
  type?: string;

  events?: {
    submit: (e) => void;
  }
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    if (this.props.type) {
      this.element?.setAttribute('type', this.props.type);
    }
  }

  render() {
    const template = Handlebars.compile(`${this.props.title}`);

    return this.compile(template, this.props);
  }
}
