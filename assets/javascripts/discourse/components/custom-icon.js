import Component from "@ember/component";
import { equal } from "@ember/object/computed";
import { tagName } from "@ember-decorators/component";
import concatClass from "discourse/helpers/concat-class";
import dIcon from "discourse-common/helpers/d-icon";

@tagName("")
export default class CustomIcon extends Component {
  get source() {
    return this.icon?.trim();
  }
}
