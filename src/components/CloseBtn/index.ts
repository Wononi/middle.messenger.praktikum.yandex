import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';

interface CloseBtnProps {
  events: {
    click: () => void;
  }
}

export class CloseBtn extends Block<CloseBtnProps> {
  constructor(props: CloseBtnProps) {
    super('span', props);
  }

  render() {
    const template = Handlebars.compile(`\t&#10006;`);

    return  this.compile(template, this.props);
  }
}
