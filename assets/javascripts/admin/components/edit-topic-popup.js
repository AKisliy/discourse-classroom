import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

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