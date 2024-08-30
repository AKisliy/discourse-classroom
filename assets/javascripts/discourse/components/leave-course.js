import Component from "@glimmer/component";
import { service } from '@ember/service';
import { action } from "@ember/object";

export default class LeaveCourse extends Component {
    @service modal;
    @service dialog;

    @action
    leaveCourse(){
        this.dialog.alert("You left the course");
        this.args.closeModal();
    }
}