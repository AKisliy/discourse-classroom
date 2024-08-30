import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import EmberObject from '@ember/object';

export default class AddVideoPopupComponent extends Component {
    @service videoService;
    @service modal;

    @tracked videoDetails = EmberObject.create({
        name: '',
        description: '',
        link: '',
        transcript: '',
        notes: ''
    });

    @action
    onAdd(){
        console.log(this.args.model);
        if(!this.args.model){
            console.error("Classroom topic id wasn't provided to AddVideoPopup");
            return;
        }
        let topic = this.args.model.topic;
        const videoData = {
            name: this.videoDetails.name,
            description: this.videoDetails.description,
            link: this.videoService.getYoutubeEmbedId(this.videoDetails.link),
            transcript: this.videoDetails.transcript,
            notes: this.videoDetails.notes,
            classroom_topic_id: topic.id
        }
        this.videoService.addVideo(videoData);
        this.args.closeModal();
    }
}