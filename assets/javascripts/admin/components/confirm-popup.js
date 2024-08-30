import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ConfirmPopupComponent extends Component {
    @action
    onClose(){
        if(this.args.onClose)
            this.args.onClose();
        else
            console.error("onClose method wasn't provided for confirm popup");
    }

    @action
    onRightButtonAction(){
        if(this.args.onRightButtonAction)
            this.args.onRightButtonAction();
        else
            console.error("onRightButtonAction method wasn't provided for confirm popup");
    }
}