import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import './Input.module.scss';

interface InputProps {
  type: string;
  placeholder?: string;
  name?: string;
  required?: string;
  id?: string;
  value?: string;
  accept?: string;
  events?: {
    focus?: (e) => void;
    blur?: (e) => void;
  }
}

export class Input extends Block {
    constructor(props: InputProps) {
        super(props);
    }

    public getName() {
        return (this.element as HTMLInputElement).name;
    }

    public getValue() {
        return (this.element as HTMLInputElement).value;
    }

    render() {
        const template = Handlebars.compile(`
        <input type=${this.props.type} 
               ${this.props.name ? `name=${this.props.name}` : ""} 
               ${this.props.placeholder ? `placeholder=${this.props.placeholder}` : ""} 
               ${this.props.value ? `value=${this.props.value}` : ""} 
               ${this.props.accept ? `accept=${this.props.accept}` : ""} 
               ${this.props.required ? this.props.required : ""} 
        >
    `);

        return this.compile(template, this.props);
    }
}
