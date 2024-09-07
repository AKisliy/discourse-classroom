import Service, { service } from "@ember/service";
import { popupAjaxError } from "discourse/lib/ajax-error";
import SiteSetting from "admin/models/site-setting";


export default class AdminCourseService extends Service {
    @service eventBus;

    course = {
        title: "",
        description: "",
        imageLink: ""
    };

    // // configuration for getting settings
    // config = {
    //     categories: ["required"],
    //     filter_names: ["course_logo", "creator_id"]
    // };

    // async loadSettings(){
    //     if(this.course.title !== "")
    //         return;
    //     Promise.all([
    //         SiteSetting.findAll(this.config),
    //         ajax("/about.json")
    //     ])
    //     .then(async (response) => {
    //         let settings = response[0][0]?.siteSettings;
    //         let mainInfo = response[1].about;
    //         this.course.title = mainInfo.title;
    //         this.course.description = mainInfo.description;
    //         this.course.imageLink = settings.findBy("setting", "course_logo")?.value;
    //         this.course = this.course;
    //         this.eventBus.trigger(this.eventBus.courseActions.onUpdated, this.course);
    //     })
    //     .catch(popupAjaxError);
    // }

    updateCourse(args){
        Promise.all([
            SiteSetting.update("title", args.title ?? this.course.title),
            SiteSetting.update("site_description", args.description ?? this.course.description),
            SiteSetting.update("course_logo", args.imageLink ?? this.course.imageLink)
        ]).then(() => {
            this.course.title = args.title ?? this.course.title;
            this.course.description = args.description ?? this.course.description;
            this.course.imageLink = args.imageLink ?? this.course.imageLink;
            this.eventBus.trigger(this.eventBus.courseActions.onUpdated, this.course);
        }).catch(popupAjaxError);
    }
}


