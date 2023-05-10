import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';

interface AvatarProps {
  src: string,
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    const template = Handlebars.compile(`<img src=${this.props.src} />`)

    return this.compile(template, this.props);
  }
}
