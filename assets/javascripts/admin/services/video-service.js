import Service, { service } from "@ember/service";
import { ajax } from "discourse/lib/ajax";
import { popupAjaxError } from "discourse/lib/ajax-error";

export default class VideoService extends Service {
  @service eventBus;

  addVideo(videoData) {
    return ajax(
      `/classroom/classroom_topics/${videoData.classroom_topic_id}/videos`,
      {
        method: "POST",
        data: JSON.stringify({ video: videoData }),
        contentType: "application/json",
      }
    )
      .then((response) => {
        this.eventBus.trigger(
          this.eventBus.videoActions.onAdded,
          response.video
        );
      })
      .catch(popupAjaxError);
  }

  deleteVideo(video) {
    return ajax(
      `/classroom/classroom_topics/${video.classroom_topic_id}/videos/${video.id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        this.eventBus.trigger(this.eventBus.videoActions.onDeleted, video);
      })
      .catch(popupAjaxError);
  }

  editVideo(video) {
    return ajax(
      `/classroom/classroom_topics/${video.classroom_topic_id}/videos/${video.id}`,
      {
        method: "PATCH",
        data: JSON.stringify({ video }),
        contentType: "application/json",
      }
    )
      .then((response) => {
        this.eventBus.trigger(
          this.eventBus.videoActions.onEdited,
          response.video
        );
      })
      .catch(popupAjaxError);
  }

  getYoutubeEmbedId(url) {
    const shortUrlRegex = /youtu.be\/([a-zA-Z0-9_-]+)\??/i;
    const longUrlRegex =
      /youtube.com\/((?:embed)|(?:watch))((?:\?v\=)|(?:\/))([a-zA-Z0-9_-]+)/i;

    let youtubeId = null;

    if (shortUrlRegex.test(url)) {
      const matches = url.match(shortUrlRegex);
      youtubeId = matches[matches.length - 1];
    }

    if (!youtubeId && longUrlRegex.test(url)) {
      const matches = url.match(longUrlRegex);
      youtubeId = matches[matches.length - 1];
    }
    return youtubeId;
  }

  getVideoYoutubeLink(linkId) {
    return `https://youtu.be/${linkId}`;
  }
}
