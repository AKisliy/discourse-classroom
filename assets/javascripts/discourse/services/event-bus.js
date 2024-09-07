import Evented from "@ember/object/evented";
import Service from "@ember/service";

// Сервис, который расширен Evented для поддержки событий
export default class EventBus extends Service.extend(Evented) {
  videoActions = {
    onDeleted: "videoDeleted",
    onDeleting: "videoDeleting",
    onAdding: "videoAdding",
    onAdded: "videoAdded",
    onEditing: "videoEditing",
    onEdited: "videoEdited",
  };

  topicActions = {
    onAdding: "topicAdding",
    onAdded: "topicAdded",
    onDeleted: "topicDeleted",
    onDeleting: "topicDeleting",
    onEditing: "topicEditing",
    onEdited: "topicEdited",
  };

  courseActions = {
    onEditing: "courseEditing",
    onUpdating: "courseUpdating",
    onUpdated: "courseUpdated",
    getInfo: "getCourseInfo",
  };
}
