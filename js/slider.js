const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpeg',
    'images/9.jpg',
]

let imgIndex = 0;
const  imgEl = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgIndex, imgUrl);
    imgEl.setAttribute('src', imgUrl);
    imgIndex ++;
},1000);