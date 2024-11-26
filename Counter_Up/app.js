const listCounter = document.querySelectorAll('.counter')

function counterUp(el) {
    let numberEl = el.querySelector('.number')
    let to = parseInt(numberEl.innerHTML)
    let count = 0
    let time = 300
    let step = to / time

    let counting = setInterval(() => {
        count += step
        if (count > to) {
            clearInterval(counting)
            numberEl.innerHTML = to
        } else {
            numberEl.innerHTML = Math.round(count)
        }
    }, 1);
}

listCounter.forEach(item => {
    counterUp(item)
})