import Component from "@ember/component";
import { tagName } from "@ember-decorators/component";

@tagName("")
export default class CustomIcon extends Component {
  get source() {
    return this.icon?.trim();
  }
}
