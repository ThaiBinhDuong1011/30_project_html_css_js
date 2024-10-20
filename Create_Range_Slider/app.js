const body = document.querySelector('body')
const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range-bar')
const value = document.querySelector('.range-bar span')

function setRangeBar(percent) {
    rangeBar.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}

setRangeBar(20)

range.addEventListener('mousemove', function (e) {
    var process = e.pageX - this.offsetLeft
    var percent = Math.ceil((process / this.offsetWidth) * 100)

    setRangeBar(percent)
})