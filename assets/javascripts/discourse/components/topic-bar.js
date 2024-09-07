import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { next } from '@ember/runloop';
import { service } from '@ember/service';
import AddVideoPopupComponent from "../../admin/components/add-video-popup";
import DeleteTopicPopup from "../../admin/components/delete-topic-popup";
import EditTopicPopup from "../../admin/components/edit-topic-popup";

export default class TopicBar extends Component {
    @service currentUser;
    @service eventBus;
    @service modal;

    @tracked isOpen = false;

    get topic(){
        return this.args.topic;
    }

    get topicBarLinks(){
        return [
          { title: "Edit topic", icon:"far-edit", action: this.openPopup.bind(this, EditTopicPopup)},
          { title: "Add video", icon:"plus", action: this.openPopup.bind(this, AddVideoPopupComponent) },
          { title: "Delete topic", icon: "far-trash-alt", action: this.openPopup.bind(this, DeleteTopicPopup)}
        ];
    }

    @action
    toggleIsOpen(){
        this.isOpen = !this.isOpen;

        next(() => {
            if(this.isOpen)
                {this.loadVideos();}
        });
    }

    @action
    dragEnd({sourceList, sourceIndex, targetList, targetIndex}){
        if (sourceList === targetList && sourceIndex === targetIndex) {return;}

        const item = sourceList.objectAt(sourceIndex);

        sourceList.removeAt(sourceIndex);
        targetList.insertAt(targetIndex, item);
    }

    openPopup(popup){
        this.modal.show(popup, { model: { topic : this.topic }} );
    }

    loadVideos(){
        let youTubeVideos = document.querySelectorAll('.youtube');
        for (let i = 0; i < youTubeVideos.length; i++) {
            //add click event that will load YouTube video
            youTubeVideos[i].addEventListener( "click", function() {
                this.innerHTML = '<iframe frameBorder="0" width="200" height="112.5"' +
                    'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"' +
                    'src="https://www.youtube.com/embed/' + this.dataset.embed + '?enablejsapi=1&rel=0&showinfo=0&autoplay=1"' +
                    ' allowFullScreen="allowfullscreen"></iframe>';
            } );
        }
    }
}
