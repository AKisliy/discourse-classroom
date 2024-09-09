import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";

export default class DeleteVideoPopup extends Component {
  @service videoService;

  @action
  deleteVideo() {
    this.videoService.deleteVideo(this.args.model.video);
    this.args.closeModal();
  }
}
