import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import {Input} from '../Input';
import {Button} from '../Button/inedex';

interface AvatarFormProps {
  events: {
    submit: () => void;
  }
}

export class AvatarForm extends Block<AvatarFormProps> {
  constructor(props: AvatarFormProps) {
    super(props);
  }

  init() {
    this.children.input = new Input({
      type: 'file',
      name: 'avatar',
      accept: 'image/*'
    })
    this.children.avaBtn = new Button({
      title: 'Поменять',
      type: 'submit',
    });
  }

  render() {
    const template = Handlebars.compile(`
      <form>
        {{{input}}}
        {{{avaBtn}}}
      </form>
    `)

    return this.compile(template, this.props);
  }
}
