import { next } from "@ember/runloop";
import { service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";
import StaticPage from "discourse/models/static-page";
import DiscourseRoute from "discourse/routes/discourse";

export default class AddTopicPopupRoute extends DiscourseRoute {
  @service router;

  beforeModel() {
    this.router
      .replaceWith(`/${defaultHomepage()}`)
      .followRedirects()
      .then((e) => next(() => e.send("showAddTopicPopup")));
  }

  model() {
    return StaticPage.find("add-topic-popup");
  }
}
