const body = document.querySelector('body')
const input = document.querySelector('.input')
const content = document.querySelector('.content')
const noContent = document.querySelector('.no-content')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const time = document.querySelector('.time')
const temperature = document.querySelector('.temperature .value')
const shortDesc = document.querySelector('.short-desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const cloud = document.querySelector('.cloud span')

body.setAttribute('class', 'hot')

function changeWeatherUI(weather) {
    city.innerHTML = weather.name
    country.innerHTML = weather.sys.country
    time.innerHTML = new Date().toLocaleString()
    var temp = Math.round(weather.main.temp)
    temperature.innerHTML = temp
    shortDesc.innerHTML = weather.weather[0].main
    visibility.innerHTML = weather.visibility + ' (m)'
    wind.innerHTML = weather.wind.speed + ' (m/s)'
    cloud.innerHTML = weather.clouds.all + ' (%)'

    if (temp >= 18) {
        body.setAttribute('class', 'hot');
    } else {
        body.setAttribute('class', 'cold');
    }
}

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        getWeather()
        input.value = ''
        noContent.classList.add('hide')
    }
})

async function getWeather() {
    var inputValue = input.value.trim()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    const res = await fetch(url)
    const weather = await res.json()

    if (weather.cod === 200) {
        setTimeout(() => {
            changeWeatherUI(weather)
            content.classList.remove('hide')
        }, 500);
    } else {
        content.classList.add('hide')
        setTimeout(() => {
            noContent.classList.remove('hide')
        }, 300);
    }
}

getWeather()

