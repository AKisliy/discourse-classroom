import Component from "@glimmer/component";
import { service } from '@ember/service';
import AddTopicPopupComponent from "../../admin/components/add-topic-popup";
import DeleteCoursePopup from "../../admin/components/delete-course-popup";
import EditCoursePopupComponent from "../../admin/components/edit-course-popup";
import LeaveCourse from "./leave-course";

export default class ClassroomSidebar extends Component {
    @service currentUser;
    @service eventBus;
    @service modal;

    get classroomButtonAdminLinks(){
        return [
            { title: "Edit course", icon:"far-edit", action: () => this.modal.show(EditCoursePopupComponent, { model: { course: this.args.course }}) },
            { title: "Add topic", icon:"plus", action: () => this.modal.show(AddTopicPopupComponent) },
            { title: "Delete course", icon:"far-trash-alt", action: () => this.modal.show(DeleteCoursePopup)}, // we should consider how we'll process deleting (smth with containers?)
            // { title: "Add media", icon:"play", action:""} // coming soon
        ];
    }

    get classroomButtonLinks(){
        return [
            { title: "Leave course", icon:"user_menu.replies", action: () => this.modal.show(LeaveCourse)}
        ];
    }
}