import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class PopupInputField extends Component {
  @action
  updateValue(event) {
    this.args.targetValue = event.target.value;
  }

  checkLength() {
    return this.args.targetValue.length < this.args.maxLen;
  }
}
