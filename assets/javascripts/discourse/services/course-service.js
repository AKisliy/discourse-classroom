import Service from '@ember/service';
import { cached, tracked } from '@glimmer/tracking';
import { service } from "@ember/service";
import { ajax } from "discourse/lib/ajax";


export default class CourseService extends Service {
    @service siteSettings;
    @service eventBus;

    @tracked course = {
        title: "",
        description: "",
        imageLink: "",
        membersCount: 0,
        author: "Alexander"
    }

    @cached
    get title(){
        return this.course.title;
    }

    @cached
    get description(){
        return this.course.description;
    }

    @cached
    get imageLink(){
        return this.course.imageLink;
    }

    init(){
        super.init(arguments);
        this.eventBus.on(this.eventBus.courseActions.onUpdated, this, this.updateCourse);
        const { course_logo, creator, title, site_description } = this.siteSettings;
        this.course = {
            title,
            description: site_description,
            imageLink: course_logo,
        }
        Promise.all([
            ajax("/about.json"),
            ajax(`/u/${creator}.json`)
        ])
        .then((response) => {
            console.log(response[1]);
            let mainInfo = response[0].about
            this.course.author = response[1].user;
            this.course.membersCount = mainInfo.stats.users_count;
            this.course = this.course;
        })  
    }

    updateCourse(args){
        if (args.title)
            this.course.title = args.title;
        if (args.description)
            this.course.description = args.description;
        if (args.imageLink)
            this.course.imageLink = args.imageLink;
        this.course = this.course;
    }
}


