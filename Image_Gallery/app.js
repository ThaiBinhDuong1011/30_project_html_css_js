const images = document.querySelectorAll('.image img');
const gallery = document.querySelector('.gallery');
const closeIcon = document.querySelector('.close i');
const prevIcon = document.querySelector('.prev');
const nextIcon = document.querySelector('.next');
const galleryImg = document.querySelector('.gallery-inner img');

let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        galleryImg.src = images[currentIndex].src
        gallery.classList.add('show')
    })
})

closeIcon.addEventListener('click', () => {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})