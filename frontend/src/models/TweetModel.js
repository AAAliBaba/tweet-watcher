class TweetModel {
    constructor(obj) {
        this.imgUrl = obj['user']['profile_image_url']
        this.username = obj['user']['name']
        this.usertag = obj['user']['screen_name']
        this.message = obj['text']
        this.datetime = obj['created_at']
    }
}
export default TweetModel