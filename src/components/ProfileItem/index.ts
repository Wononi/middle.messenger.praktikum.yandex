import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';
import s from './ProfileItem.module.scss';
import {Input} from '../Input';

interface ProfileItemProps {
  name: string;
  value?: string;
  isSettings: boolean;
  inputName?: string;
  inputType?: string;
  inputValue?: string;
  events?: {
    blur: (e) => void;
  };
}

export class ProfileItem extends Block<ProfileItemProps> {
  constructor(props: ProfileItemProps) {
    super('div', props);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  init() {
    this.element?.classList.add(s.profile__content_item)
    if (this.props.isSettings) {
      this.children.input = new Input({
        name: this.props.inputName,
        value: this.props.inputValue,
        type: this.props.inputType,
        events: {
          blur: this.props.events.blur
        },
      })
    }
  }

  render() {
    if (this.props.isSettings) {
      const template = Handlebars.compile(`
        <p>${this.props.name}</p>
        {{{input}}}
    `)
      return this.compile(template, this.props)
    } else {
      const template = Handlebars.compile(`
        <p>${this.props.name}</p>
        <p>${this.props.value ? this.props.value : ''}</p>
    `)
      return this.compile(template, this.props)
    }
  }
}
