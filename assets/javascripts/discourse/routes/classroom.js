import { inject as service } from "@ember/service";
import { ajax } from "discourse/lib/ajax";
import DiscourseRoute from "discourse/routes/discourse";

export default class ClassroomRoute extends DiscourseRoute{
  @service store;

  async model() {
    console.log(this.store);
    try {
      const response = await ajax("/classroom/classroom_topics", {
          method: "GET",
          contentType: "application/json",
        });
      return response;
    } catch (e) {
      console.log('Error fetching classroom topics:', e);
      this.router.replaceWith("/404");
    }
  }

  setupController(controller, model) {
    this.controllerFor("classroom-index").set('topics', model.classroom_topics);
  }
};
