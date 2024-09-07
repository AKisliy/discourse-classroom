import Service, { service } from "@ember/service";
import { ajax } from "discourse/lib/ajax";
import { popupAjaxError } from "discourse/lib/ajax-error";

export default class TopicService extends Service {
  @service eventBus;

  addTopic(data) {
    let classroom_topic = { title: data.title, order_number: 1 };
    return ajax("/classroom/classroom_topics", {
      method: "POST",
      data: JSON.stringify({ classroom_topic }),
      contentType: "application/json",
    })
      .then((response) => {
        this.eventBus.trigger(this.eventBus.topicActions.onAdded, response);
      })
      .catch(popupAjaxError);
  }

  saveChanges(newData) {
    return ajax(`/classroom/classroom_topics/${newData.id}`, {
      method: "PATCH",
      data: JSON.stringify({ classroom_topic: newData }),
      contentType: "application/json",
    })
      .then(() => {
        this.eventBus.trigger(this.eventBus.topicActions.onEdited, newData);
      })
      .catch(popupAjaxError);
  }

  deleteTopic(topic) {
    return ajax(`/classroom/classroom_topics/${topic.id}`, {
      method: "DELETE",
    })
      .then(() => {
        this.eventBus.trigger(this.eventBus.topicActions.onDeleted, topic);
      })
      .catch(popupAjaxError);
  }
}
