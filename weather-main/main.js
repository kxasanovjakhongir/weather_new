
let city = document.querySelector('.city')
let iconHtml = document.querySelector('.icon')
let descriptionHtml = document.querySelector(".description")
let tempHtml = document.querySelector(".temp")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")
let weather = document.querySelector(".weather")
let search = document.querySelector(".search-bar")
let searchBtn = document.querySelector(".search button")
let body = document.querySelector("body")



async function fetchWeather(city) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric&appid=" +'6b62c29e5d43857702530c9e7a3f4aa5')
        const data = await response.json()
        displayWeather(data)
    } catch (error) {
        alert("No weather found.");
        throw new Error("No weather found.");
    }
    
}


function displayWeather(data) {

    const {name} = data;
    const {icon, description} = data.weather[0]
    const {temp, humidity} = data.main
    const {speed} = data.wind

    city.innerText = "Weather in " + name;
    iconHtml.scr = "https://openweathermap.org/img/wn/" + icon + ".png";
    descriptionHtml.textContent = description
    tempHtml.textContent = temp + "°C"
    humidity.innerText = "Humidity: " + humidity + "%"
    wind.textContent =  "Wind speed: " + speed + " km/h";
    weather.classList.remove("loading")
    body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
}

function searchCity() {
    fetchWeather(search.value)
    search.value = null
}

searchBtn.onclick  = () =>{
    searchCity()
}

search.onkeyup = (event) => {
    if(event.key == 'Enter'){
        searchCity()
    }
}

fetchWeather("Kokand")

