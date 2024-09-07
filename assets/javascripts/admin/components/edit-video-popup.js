import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import EmberObject, { action } from "@ember/object";
import { service } from "@ember/service";

export default class EditVideoPopup extends Component {
  @service videoService;

  @tracked videoDetails = {};

  constructor() {
    super(...arguments);
    this.args.model.video.link = this.videoService.getVideoYoutubeLink(
      this.args.model.video.link
    );
    this.videoDetails = EmberObject.create(this.args.model.video);
  }

  @action
  onSave() {
    if (!this.videoDetails.classroom_topic_id) {
      return;
    }
    this.videoDetails.link = this.videoService.getYoutubeEmbedId(
      this.videoDetails.link
    );
    const videoData = this.videoDetails;
    this.videoService.editVideo(videoData);
    this.args.closeModal();
  }
}
