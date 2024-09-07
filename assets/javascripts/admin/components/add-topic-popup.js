import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddTopicPopupComponent extends Component {
  @service topicService;
  @service modal;

  @tracked title = '';
  @tracked showErrorMessage = false;
  @tracked showLenLimitError = false;

  @action
  updateTitle(event) {
    this.title = event.target.value;
    if(this.title.length > 50) {
      this.showLenLimitError = true;
    } else {
      this.showLenLimitError = false;
    }
  }

  @action
  saveTopic() {
    if(this.title.length === 0){
      this.showErrorMessage = true;
      return;
    }
    if(this.title.length > 50){
      this.showLenLimitError = true;
      return;
    }
    this.showErrorMessage = false;
    this.topicService.addTopic({ title: this.title });
    this.onClose();
  }

  @action
  onClose(){
    this.args.closeModal();
  }
}
