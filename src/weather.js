
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


}



let apiKey = "a44cd8e3b57f8dbb75d6ba7cc1a0cdb4"

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`

// https://api.openweathermap.org/data/2.5/weather?q=London&appid={a44cd8e3b57f8dbb75d6ba7cc1a0cdb4}


axios.get(apiUrl).then(displayTemperature)