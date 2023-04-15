import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';

interface LabelProps {
  for: string;
  label: string;
  hide: string;
}

export class Label extends Block {
  constructor(props: LabelProps) {
    super(props);
  }

  init() {
    this.element?.setAttribute('for', this.props.for);
  }

  render() {
    const template = Handlebars.compile(`<label class=${this.props.hide}>${this.props.label}</label>`);

    return this.compile(template, this.props);
  }
}
