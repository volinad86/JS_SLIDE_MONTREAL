//set variables for back and forth buttons
const back = document.querySelector('.back');
const next = document.querySelector('.next');

//set variable addition of photos
const photos = ['image/1.jpg',  'image/2.jpg', 'image/3.jpg', 'image/4.jpg', 'image/5.jpg','image/6.jpg','image/7.jpg','image/8.jpg'];
console.log(photos [3])

let i = 0;

next.addEventListener('click', () =>{
    i++;
    if (i > photos.length -1){
i = 0;
    }
    document.querySelector('.image').src = photos[i];
})


back.addEventListener('click', () => {
i--
    if (i < 0){
i = photos.length -1;
    }
document.querySelector('.image').src = photos[i];
})