// Decide on class and id names for elements
// DOM selectors
const currentWeather = document.getElementById('currentWeather')
const upcomingWeather = document.getElementById('upcomingWeather')


//const APP_ID = '94506b4af0e0a236471b8ee0da3c2281'

fetch('https://api.openweathermap.org/data/2.5/weather?q=Rovaniemi,Finland&units=metric&APPID=94506b4af0e0a236471b8ee0da3c2281')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
        const roundedTemp = Math.round(json.main.temp * 10) / 10
        let sunriseTime = new Date(1644992567*1000)
        let sunriseHours = sunriseTime.getHours()
        let sunriseMinutes =  sunriseTime.getMinutes()
        let sunsetTime = new Date(1645022395*1000)
        let sunsetHours = sunsetTime.getHours()
        let sunsetMinutes =  sunsetTime.getMinutes()
    

        currentWeather.innerHTML += `
        <h1 class="main-temp">${roundedTemp} <span class="celsius">&#8451;</span></h1>
        <h2 class="city-name">${json.name}</h2>
        <p class="weather-type">${json.weather[0].main}</p>
        <div class="rise-set">Sunrise ${sunriseHours}:${sunriseMinutes} Sunset ${sunsetHours}:${sunsetMinutes}</div>
         `
    })

   