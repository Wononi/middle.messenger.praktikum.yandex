import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';

interface LabelProps {
  for: string;
  label: string;
  hide: string;
}

export class Label extends Block {
  constructor(props: LabelProps) {
    super('label', props);
  }

  init() {
    this.element?.setAttribute('for', this.props.for);
    this.element?.setAttribute('class', this.props.hide);
  }

  render() {
    const template = Handlebars.compile(`${this.props.label}`);

    return this.compile(template, this.props);
  }
}
