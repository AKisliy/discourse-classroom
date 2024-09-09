import DiscourseRoute from "discourse/routes/discourse";
import { ajax } from "discourse/lib/ajax";
import { inject as service } from "@ember/service";

export default class ClassroomClassroomTopicsRoute extends DiscourseRoute {
  @service router;

  model(params) {
    console.log("I'm here");
    return ajax("/classroom/classroom_topics")
      .then((response) => {
        console.log("Hey, bro. I returned something");
        return response;
      })
      .catch(() => this.router.replaceWith("/404"));
  }
}
