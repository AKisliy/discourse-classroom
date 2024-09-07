import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ClassroomButtonLink extends Component {
  @action
  performClickAction() {
    if (this.args.action) {
      this.args.action();
    }
  }
}
