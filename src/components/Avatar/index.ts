import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';

interface AvatarProps {
  src: string,
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super('img', props);
  }

  init() {
    this.element?.setAttribute('src', this.props.src)
  }

  render() {
    const template = Handlebars.compile(``)

    return this.compile(template, this.props);
  }
}
