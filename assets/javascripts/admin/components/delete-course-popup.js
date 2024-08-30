import Component from "@glimmer/component";
import { service } from '@ember/service';
import { action } from "@ember/object";

export default class DeleteCoursePopup extends Component {
    @service dialog;

    @action
    deleteCourse(){
        this.dialog.alert("Course was successfully deleted");
        this.closePopup();
    }

    @action
    closePopup(){
        this.args.closeModal();
    }
}