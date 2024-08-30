import Component from "@glimmer/component";
import { service } from '@ember/service';
import { action } from "@ember/object";

export default class DeleteTopicPopup extends Component {
    @service topicService;

    @action
    deleteTopic(){
        this.topicService.deleteTopic(this.args.model.topic);
        this.args.closeModal();
    }
}