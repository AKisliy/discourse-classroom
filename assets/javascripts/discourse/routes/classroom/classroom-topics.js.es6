import DiscourseRoute from "discourse/routes/discourse";
import { ajax } from "discourse/lib/ajax";
import { inject as service } from "@ember/service";

export default class ClassroomClassroomTopicsRoute extends DiscourseRoute {
  @service router;

  model() {
    return ajax("/classroom/classroom_topics")
      .then((response) => {
        return response;
      })
      .catch(() => this.router.replaceWith("/404"));
  }
}
