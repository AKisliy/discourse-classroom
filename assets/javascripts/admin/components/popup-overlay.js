import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from '@ember/service';

export default class PopupOverlay extends Component {

    @action
    closePopup() {
        if(this.args.onClose){
            console.log("on close was called in overlay");
            this.args.onClose();
            return;
        }
        document.getElementById('popup-overlay').style.display = 'none';
        document.getElementById('popup').style.display = 'none';
    }

    @action
    stopPropagation(event) {
        event.stopPropagation();
    }
}