import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from "@ember/service";

export default class ClassroomButtonDropdown extends Component {
  @service eventBus;

  @tracked isOpen = false;

  @action
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @action
  onTopicAdding() {
    this.eventBus.trigger(this.eventBus.topicActions.onAdding);
  }
}
