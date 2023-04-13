import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import './Input.module.scss';

interface InputProps {
  type: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  id?: string;
  value?: string;
  accept: string;
  events?: {
    focus?: (e) => void;
    blur?: (e) => void;
  }
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  init() {
    this.element?.setAttribute('type', this.props.type);
    if (this.props.name) {
      this.element?.setAttribute('name', this.props.name);
    }
    if (this.props.required) {
      this.element?.setAttribute('required', '');
    }
    if (this.props.placeholder) {
      this.element?.setAttribute('placeholder', this.props.placeholder);
    }
    if (this.props.value) {
      this.element?.setAttribute('value', this.props.value);
    }
    if (this.props.accept) {
      this.element?.setAttribute('accept', this.props.accept);
    }
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    const template = Handlebars.compile(``);

    return this.compile(template, this.props);
  }
}
