
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ClassroomClassroomTopicsNewController extends Controller {
  @tracked title = '';
  @tracked orderNumber = '';

  @action
  async createTopic(event) {
    event.preventDefault();
    console.log("Creating");
    ajax('/discourse-classroom/classroom_topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        classroom_topic: {
          title: this.title,
          orderNumber: this.orderNumber,
        },
      }),
    });

    if (response.ok) {
      this.transitionTo('classroom.classroom_topics.index');
    } else {
      // Handle error
    }
  }
}
