import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import EmberObject, { action } from '@ember/object';
import { service } from '@ember/service';

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
        if(!this.args.model) {
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
        };
        this.videoService.addVideo(videoData);
        this.args.closeModal();
    }
}