import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './test.module.scss';

interface btnProps {
  label: string;
  events: {
    click: () => void
  };
}

export class button extends Block<btnProps> {
  constructor(props: btnProps) {
    super('button', props);
  }

  render() {
    const template = Handlebars.compile(`
      <div>
        <h1 class=${s.button}>${this.props.label}</h1>
      </div>
    `);

    return this.compile(template, this.props);
  }
}
