// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

let postcontainer = document.querySelector(".postcontainer");

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/600/400?image=24",
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

for (let i = 0; i < posts.length; i++){
    postcontainer.innerHTML += 
    `<div class="post">
        <div class="postheader">
            <div class="profileimgcontainer">
                <img src="${posts[i]['author']['image']}" alt="">
            </div>
            <div class="postheadercontent">
                <h3>${posts[i]['author']['name']}</h3>
                <h5>${posts[i]['created']}</h5>
            </div>
        </div>
        <div class="content">
            <div>${posts[i]['content']}</div>
            <div class="imgcontainerpost">
                <img src="${posts[i]['media']}" alt="">
            </div>
        </div>
        <div class="footerpost">
            <div class="">
                <button id="like" class="buttonlike like" href="" data-postid="${posts[i]['id']}">
                    <i class="fa-solid fa-thumbs-up";"></i>
                    <span>Mi Piace</span>
                </button>
            </div>
            <div class="numberlike">
                <p>Piace a <b id="like-counter-${posts[i]['id']}" class="js-likes-counter">${posts[i]['likes']}</b> persone</p>
            </div>
        </div>
    </div>`
}

/* <a id="like" class="buttonlike like" href="">
    <i class="fa-solid fa-thumbs-up";"></i>
    <span>Mi Piace</span>
</a> */

// let counter = document.querySelector(".numberlike");



let buttonlike = document.querySelectorAll(".buttonlike");
    for (let i = 0; i < buttonlike.length; i++){
        buttonlike[i].addEventListener('click', function(){
            this.classList.toggle('button_change');
            if (this.classList.contains('button_change')) {
                posts[i]['likes']++;
            }else {
                posts[i]['likes']--;
            }

            document.getElementById(`like-counter-${posts[i]['id']}`).innerHTML = posts[i]['likes'];
    });    
}



// function incrementbutton(){

//     for (let i = 0; i < posts.length; i++){
        
//         let counter = document.getElementById('likes')
//         let value = counter[i]['likes'];

//         value++

//         // console.log(value);
//         // document.getElementById('likes').innerHTML = values
    

// }
// };
