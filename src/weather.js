/** @format */

function formatDate(timestamp) {
	let date = new Date(timestamp);

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let days = ['Sunday', 'Monday', 'Tuesday', 'wednsday', 'Thursday', 'Friday', 'Saturday'];

	let day = days[date.getDay()];

	return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
	console.log(response.data);

	celsiusTemp = response.data.main.temp;

	let temperatureElement = document.querySelector('#temperature');
	temperatureElement.innerHTML = Math.round(celsiusTemp);

	let cityName = document.querySelector('#city-name');
	cityName.innerHTML = response.data.name;

	let descriptionElement = document.querySelector('#description');
	descriptionElement.innerHTML = response.data.weather[0].description;

	let humidityElement = document.querySelector('#humidity');
	humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}`;

	let windElement = document.querySelector('#wind');
	windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} Km/H`;

	let dateElement = document.querySelector('#date');
	dateElement.innerHTML = formatDate(response.data.dt * 1000);

	let iconElement = document.querySelector('#icon');
	iconElement.setAttribute('src', `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
	iconElement.setAttribute('alt', `${response.data.weather[0].description}`);
}

function handelSubmit(event) {
	event.preventDefault();
	let cityInputElement = document.querySelector('#city-input');
	search(cityInputElement.value);
	console.log(cityInputElement.value);
}

function search(city) {
	let apiKey = 'a44cd8e3b57f8dbb75d6ba7cc1a0cdb4';
	//let city = 'Oslo';
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	// https://api.openweathermap.org/data/2.5/weather?q=London&appid={a44cd8e3b57f8dbb75d6ba7cc1a0cdb4}

	axios.get(apiUrl).then(displayTemperature);
}

function displayFahrenheitTemp(event) {
	event.preventDefault();

	celsiusLink.classList.remove('active');
	fahrenheitLink.classList.add('active');

	let farhenheitFormul = (celsiusTemp * 9) / 5 + 32;

	let temperatureElement = document.querySelector('#temperature');
	temperatureElement.innerHTML = Math.round(farhenheitFormul);

	//alert(farhenheitFormul);
}

function displayCelsiusTemp(event) {
	event.preventDefault();

	fahrenheitLink.classList.remove('active');
	celsiusLink.classList.add('active');

	let temperatureElement = document.querySelector('#temperature');
	temperatureElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let fahrenheitLink = document.querySelector('#fahrenheit-link');
let celsiusLink = document.querySelector('#celsius-link');

fahrenheitLink.addEventListener('click', displayFahrenheitTemp);
celsiusLink.addEventListener('click', displayCelsiusTemp);

let formElement = document.querySelector('#search-form');

formElement.addEventListener('submit', handelSubmit);
