import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';

interface ButtonProps {
  title: string;
  type: string;

  events: {
    click: (e) => void;
  }
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(`<button type=${this.props.type}>${this.props.title}</button>`);

    return this.compile(template, this.props);
  }
}
