import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from "@ember/service";

export default class EditTopicPopupComponent extends Component {
  @service topicService;

  @tracked topic = this.args.model.topic;

  @action
  updateTopicTitle(event) {
    this.topic.title = event.target.value;
  }

  @action
  onSave() {
    this.topicService.saveChanges(this.topic);
    this.args.closeModal();
  }
}
