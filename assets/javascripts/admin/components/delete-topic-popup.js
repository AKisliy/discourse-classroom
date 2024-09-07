import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from '@ember/service';

export default class DeleteTopicPopup extends Component {
    @service topicService;

    @action
    deleteTopic(){
        this.topicService.deleteTopic(this.args.model.topic);
        this.args.closeModal();
    }
}