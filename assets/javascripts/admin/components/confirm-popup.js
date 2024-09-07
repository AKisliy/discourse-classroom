import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ConfirmPopupComponent extends Component {
    @action
    onClose(){
        if(this.args.onClose)
            {this.args.onClose();}
    }

    @action
    onRightButtonAction(){
        if(this.args.onRightButtonAction)
            {this.args.onRightButtonAction();}
    }
}