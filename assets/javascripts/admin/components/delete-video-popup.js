import Component from "@glimmer/component";
import { service } from '@ember/service';
import { action } from "@ember/object";

export default class DeleteVideoPopup extends Component {
    @service videoService;

    @action
    deleteVideo(){
        this.videoService.deleteVideo(this.args.model.video);
        this.args.closeModal();
    }
}