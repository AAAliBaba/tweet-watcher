class TweetModel {
    constructor(obj) {
        this.id = obj['id']
        this.imgUrl = obj['user']['profile_image_url']
        this.username = obj['user']['name']
        this.usertag = obj['user']['screen_name']
        this.message = obj['text']
        this.datetime = obj['created_at']
    }

    // constructor(imgurl, username, usertag, message, datetime) {
    //     this.imgUrl = imgurl
    //     this.username = username
    //     this.usertag = usertag
    //     this.message = message
    //     this.datetime = datetime
    // }
}
export default TweetModel