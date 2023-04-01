import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import './Input.module.scss';

interface InputProps {
  type: string;
  name: string;
  required?: string;
  events?: {
    focus: () => void
  }
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(`
        <input type=${this.props.type} name=${this.props.name} ${this.props.required!}>
    `);

    return this.compile(template, this.props);
  }
}
