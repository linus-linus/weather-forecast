
function formatDate(timestamp) {
	let date = new Date(timestamp)

let hours = date.getHours();
let minutes = date.getMinutes();
let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"wednsday",
	"Thursday",
	"Friday",
	"Saturday"
]

let day = days[date.getDay()]

return `${day} ${hours}:${minutes}`

}

function displayTemperature(response){

	console.log(response.data)

	let temperatureElement = document.querySelector("#temperature")
	temperatureElement.innerHTML = Math.round(response.data.main.temp)

	let cityName = document.querySelector("#city-name")
	cityName.innerHTML = response.data.name

	let descriptionElement = document.querySelector("#description")
	descriptionElement.innerHTML = response.data.weather[0].description


	let humidityElement = document.querySelector('#humidity')
	humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}`

	let windElement = document.querySelector('#wind')
	windElement.innerHTML = `Wind: ${ Math.round(response.data.wind.speed)} Km/H`

	let dateElement = document.querySelector('#date')
	dateElement.innerHTML = formatDate(response.data.dt * 1000)

	let iconElement = document.querySelector("#icon")
	iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    iconElement.setAttribute("alt", `${response.data.weather[0].description}`)

}



let apiKey = "a44cd8e3b57f8dbb75d6ba7cc1a0cdb4"

let city = "Oslo"

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

// https://api.openweathermap.org/data/2.5/weather?q=London&appid={a44cd8e3b57f8dbb75d6ba7cc1a0cdb4}


axios.get(apiUrl).then(displayTemperature)