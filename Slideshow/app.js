const imgWrap = document.querySelector('.img-wrap')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const listImgs = document.querySelectorAll('.list-img img')

var currentIndex = 0

function updateImgWrap(index) {
    // remove all active img
    document.querySelectorAll('.list-img div').forEach(item => {
        item.classList.remove('active')
    })

    currentIndex = index
    imgWrap.src = listImgs[index].getAttribute('src')

    // set active
    listImgs[index].parentElement.classList.add('active')
}

listImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        imgWrap.style.opacity = '0'
        setTimeout(() => {
            updateImgWrap(index)
            imgWrap.style.opacity = '1'
        }, 200);
    })
})

prev.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = listImgs.length - 1
    } else {
        currentIndex--
    }

    imgWrap.style.animation = ''
    setTimeout(() => {
        updateImgWrap(currentIndex)
        imgWrap.style.animation = 'slide-left 1s ease-in-out'
    }, 200);

})

next.addEventListener('click', () => {
    if (currentIndex === listImgs.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }

    imgWrap.style.animation = ''
    setTimeout(() => {
        updateImgWrap(currentIndex)
        imgWrap.style.animation = 'slide-right 1s ease-in-out'
    }, 200);
})