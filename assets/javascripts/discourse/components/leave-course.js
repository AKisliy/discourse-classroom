import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";

export default class LeaveCourse extends Component {
  @service modal;
  @service dialog;

  @action
  leaveCourse() {
    this.dialog.alert("You left the course");
    this.args.closeModal();
  }
}
