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
}

export class ProfileItem extends Block<ProfileItemProps> {
  constructor(props: ProfileItemProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add(s.profile__content_item)
    this.children.input = new Input({
      name: this.props.inputName,
      value: this.props.inputValue,
      type: this.props.inputType
    })
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
        <p>${this.props.value}</p>
    `)
      return this.compile(template, this.props)
    }
  }
}
