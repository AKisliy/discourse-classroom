import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class EditCoursePopupComponent extends Component {
    @service eventBus;
    @service adminCourseService;
    @service modal;

    @tracked title = this.course.title;
@tracked description = this.course.description;
@tracked imageLink = this.course.imageLink;
course = {};




    constructor(){
        super(...arguments);
        this.course = this.args.model.course;
    }

    @action
    updateTitle(event) {
        this.title = event.target.value;
    }

    @action
    updateDescription(event) {
        this.description = event.target.value;
    }

    @action
    onClose() {
        this.modal.close();
    }

    @action
    uploadDone({ url }){
        this.imageLink = url;
    }

    @action
    onSave() {
        let course = {
            title: this.title,
            description: this.description,
            imageLink: this.imageLink
        };
        this.adminCourseService.updateCourse(course);
        this.onClose();
    }
}