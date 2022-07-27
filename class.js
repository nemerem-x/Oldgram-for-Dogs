

class Post {
    constructor(posts){
        Object.assign(this, posts)
    }
    postHtml(){
        let {name, username, location, avatar, post, comment, likes} = this
        return `<div class="section0">
            <img src="${avatar}" alt="profile">
            <div class="profile">
                <p>${username}</p>
                <p>${location}</p>
            </div>
        </div>

        <div class="section1">
            <img src="${post}" alt="post">
        </div>

        <div class="section2">
            <div class="interact">
                <img src="./images/like.png" alt="like">
                <img src="./images/comment.png" alt="comment">
                <img src="./images/share.png" alt="share">
            </div>

            <div class="info">
                <p><span>${likes} likes</span></p>
                <p><span>${name}</span> ${comment}</p>
            </div>

        </div>`
    }
}

export default Post