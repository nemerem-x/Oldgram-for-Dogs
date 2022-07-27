import posts from "./data.js";
import Post from "./class.js";



const render = () => {
    let postData = new Post(posts[0])
    let datas = postData.postHtml()
    
    // let array = postData.map(function(data){
    //     return data
    // })

    document.getElementById('render').innerHTML = datas
}

render()

// let array = posts.map((data) => {
//     let {name, username, location, avatar, post, comment, likes} = data
//     return `<div class="section0">
//         <img src="${avatar}" alt="profile">
//         <div class="profile">
//             <p>${username}</p>
//             <p>${location}</p>
//         </div>
//     </div>

//     <div class="section1">
//         <span class="heart"><ion-icon name="heart"></ion-icon></span>
//         <img class="picture" src="${post}" alt="post">
//     </div>

//     <div class="section2">
//         <div class="interact">
//             <img src="./images/like.png" alt="like">
//             <img src="./images/comment.png" alt="comment">
//             <img src="./images/share.png" alt="share">
//         </div>

//         <div class="info">
//             <p><span id="likes">${likes}</span> likes</p>
//             <p><span>${name}</span> ${comment}</p>
//         </div>

//     </div>`
//         }).join('')

// document.getElementById('render').innerHTML = array
// const pictures = document.querySelectorAll('.picture')

// pictures.forEach(picture => {
//     picture.addEventListener('dblclick', (e) => {
//         let j = e.currentTarget.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.firstElementChild
//         j.textContent++
        
//         let i = e.currentTarget.parentElement.firstElementChild
//         i.classList.add('click')
//         setTimeout(function(){
//             i.classList.remove('click')
//         },1000)
//     })
// });