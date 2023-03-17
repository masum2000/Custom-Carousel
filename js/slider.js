const images = [
    'images/1.JPG',
    'images/2.JPG',
    'images/3.JPG',
    'images/4.JPG',
    'images/5.JPG',
    'images/6.JPG',
    'images/7.JPG',
    'images/8.jpeg',
    'images/9.JPG',
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