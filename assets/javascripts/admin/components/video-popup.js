import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class VideoPopup extends Component {
  @action
  updateVideoName(event) {
    this.args.videoDetails.set("name", event.target.value);
  }

  @action
  updateLink(event) {
    this.args.videoDetails.set("link", event.target.value);
  }

  @action
  updateTranscript(event) {
    this.args.videoDetails.set("transcript", event.target.value);
  }

  @action
  updateNotes(event) {
    this.args.videoDetails.set("notes", event.target.value);
  }

  @action
  onClose() {
    if (this.args.onClose) {
      this.args.onClose();
    }
  }

  @action
  onRightButtonClick() {
    if (this.args.onRightButtonClick) {
      this.args.onRightButtonClick();
    }
  }
}
