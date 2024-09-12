import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";
import DeleteVideoPopup from "../../admin/components/delete-video-popup";
import EditVideoPopup from "../../admin/components/edit-video-popup";

export default class TopicVideo extends Component {
  @service modal;
  @service currentUser;

  dragVideoOptions = {
    isDragging: false,
    initY: 0,
    videoBar: null,
    containerOffsetY: 0,
  };
  videoLocalesPrefix = "buttons.action_buttons.video.";

  get videoButtonLinks() {
    return [
      {
        title: this.videoLocalesPrefix + "edit",
        icon: "far-edit",
        action: this.openPopup.bind(this, EditVideoPopup),
      },
      {
        title: this.videoLocalesPrefix + "delete",
        icon: "far-trash-alt",
        action: this.openPopup.bind(this, DeleteVideoPopup),
      },
    ];
  }

  @action
  getEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  @action
  getPreviewImageUrl(videoId) {
    return "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
  }

  @action
  dragVideo(event) {
    this.dragVideoOptions.isDragging = true;

    // our container will be our bars
    let container = event.target.closest(".topic-bar-videos");
    // save parameters of container
    container.style.width = container.offsetWidth + "px";
    container.style.height = container.offsetHeight + "px";
    // get the target video bar (aka current item to move)
    let videoBar = event.target.closest(".topic-video");

    this.dragVideoOptions.videoBar = videoBar;
    this.dragVideoOptions.containerOffsetY = videoBar.offsetTop;

    videoBar.classList.add("dragging");
    document.body.style.userSelect = "none";
    videoBar.classList.add("insert-animation");
    // videoBar.style.top = containerOffsetY + "px";
    this.dragVideoOptions.initY = event.clientY;
  }

  @action
  moveVideoBar() {
    if (!this.dragVideoOptions.isDragging) {
      return;
    }
  }

  openPopup(popup) {
    this.modal.show(popup, { model: { video: this.args.video } });
  }
}
