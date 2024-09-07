import { tracked } from '@glimmer/tracking';
import Service, { service } from "@ember/service";
import { ajax } from "discourse/lib/ajax";

export default class CourseService extends Service {
    @service siteSettings;
    @service eventBus;

    @tracked course = {};

    // @cached
    // get title(){
    //     return this.course.title;
    // }

    // @cached
    // get description(){
    //     return this.course.description;
    // }

    // @cached
    // get imageLink(){
    //     return this.course.imageLink;
    // }

    init(){
        super.init(arguments);
        this.eventBus.on(this.eventBus.courseActions.onUpdated, this, this.updateCourse);
        const { course_logo, creator, title, site_description } = this.siteSettings;
        this.course = {
            title,
            description: site_description,
            imageLink: course_logo,
        };
        Promise.all([
            ajax("/about.json"),
            ajax(`/u/${creator}.json`)
        ])
        .then((response) => {
            let currentCourse = this.course;
            let mainInfo = response[0].about;
            currentCourse.author = response[1].user;
            currentCourse.membersCount = mainInfo.stats.users_count;
            this.course = currentCourse;
        });
    }

    updateCourse(args){
        let updatedCourse = this.course;
        if (args.title) {
            updatedCourse.title = args.title;
        }
        if (args.description) {
            updatedCourse.description = args.description;
        }
        if (args.imageLink) {
            updatedCourse.imageLink = args.imageLink;
        }
        this.course = updatedCourse;
    }
}


