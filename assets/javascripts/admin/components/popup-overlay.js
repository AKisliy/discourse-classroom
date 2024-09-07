import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class PopupOverlay extends Component {

    @action
    closePopup() {
        if(this.args.onClose){
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