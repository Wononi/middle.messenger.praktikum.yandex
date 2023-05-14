import {Block} from '../../utils/Block';
import Handlebars from 'handlebars';

interface CloseBtnProps {
  events: {
    click: () => void;
  }
}

export class CloseBtn extends Block<CloseBtnProps> {
    constructor(props: CloseBtnProps) {
        super(props);
    }

    render() {
        const template = Handlebars.compile(`<span>\t&#10006;</span>`);

        return this.compile(template, this.props);
    }
}
