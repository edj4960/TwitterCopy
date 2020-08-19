export class status {
    
    constructor() {
        this.alias = "";
        this.message = "";
        this.media = [];
        this.timeStamp = null;
    }
            
    createStatus(alias, message, media) {
        status = new status();
        status.alias = alias;
        status.message = message;
        status.media = media;
        this.timeStamp 
    }
}