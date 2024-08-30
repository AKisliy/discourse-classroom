import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from '@ember/service';

export default class PopupInputField extends Component {

    @action
    updateValue(event){
        this.args.targetValue = event.target.value;
        if(this.args.checkLength){

        }
    }

    checkLength(){
        return this.args.targetValue.length < this.args.maxLen;
    }
}