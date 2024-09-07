import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ClassroomIndexController extends Controller {
  @service currentUser;
  @service dialog;
  @service eventBus;
  @service courseService;
  @service modal;

  @tracked topics = [];

  init(){
    super.init(...arguments);

    this.eventBus.on(this.eventBus.videoActions.onDeleted, this, this.onVideoDeleted);
    this.eventBus.on(this.eventBus.videoActions.onAdded, this, this.onVideoAdded);
    this.eventBus.on(this.eventBus.videoActions.onEdited, this, this.onVideoEdited);

    this.eventBus.on(this.eventBus.topicActions.onAdded, this, this.onTopicAdded);
    this.eventBus.on(this.eventBus.topicActions.onDeleted, this, this.onTopicDeleted);
    this.eventBus.on(this.eventBus.topicActions.onEdited, this, this.onTopicEdited);
  }

  get course(){
    return this.courseService.course;
  }

//#region VideoHandlers
  onVideoAdded(video){
      let topicIdx = this.topics.findIndex(topic => topic.id === video.classroom_topic_id);
      if(topicIdx === -1){
        return;
      }
      this.topics[topicIdx].videos.push(video);
      this.topics = [...this.topics];
  }

  onVideoDeleted(video){
    let topic = this.topics.find(t => t.id === video.classroom_topic_id);
    if (topic) {
      topic.videos = topic.videos.filter(v => v.id !== video.id);
      this.topics = [...this.topics];
    }
  }

  onVideoEdited(video){
    let topicIdx = this.topics.findIndex(topic => topic.id === video.classroom_topic_id);
    if(topicIdx === -1) {
      return;
    }
    let videoIdx = this.topics[topicIdx].videos.findIndex(v => v.id === video.id);
    if(videoIdx === -1) {
      return;
    }
    this.topics[topicIdx].videos[videoIdx] =video;
    this.topics = [...this.topics];
  }
//#endregion


//#region Topic handlers
  onTopicAdded(response){
    this.topics = [...this.topics, response.classroom_topic];
  }

  onTopicDeleted(topic){
    this.topics = this.topics.filter(t => t.id !== topic.id);
  }

  onTopicEdited(newTopicInfo){
    let idx = this.topics.findIndex(t => t.id === newTopicInfo.id);
    if(idx === -1){
      return;
    }
    this.topics[idx] = newTopicInfo;
    this.topics = [...this.topics];
  }
  //#endregion
}



