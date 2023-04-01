import {Block} from '../../utils/Block';
import {button} from './btn';
import Handlebars from 'handlebars';

interface HomePageProps {
  title: string;
  button: button
}

export class HomePage extends Block {
  constructor(props: HomePageProps) {
    super('div', props);
  }

  init() {
    this.children.butto = new button({
      label: 'Click me 123',
      events: {
        click: () => console.log('clicked'),
      },
    });
  }

  render() {
    const template = Handlebars.compile(`<div>${this.props.title}</div><div>{{{butto}}}</div>`);

    console.log(this.children);

    return this.compile(template, this.props);
  }
}
