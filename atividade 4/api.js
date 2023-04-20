//Declaração de variáveis
const apiKey = "5df9b5cdde7b22bb7d08ed3ef9a963ef"; 
const cityInput = document.getElementById('city-input');
const button = document.getElementById('search');
const cityElement = document.querySelector('#city');
const temperatureElement = document.querySelector('#temperature span');
const descriptionElement = document.querySelector('#description');
const iconElement = document.querySelector('#weather-icon');
const umidityElement = document.querySelector('#umidity span');
const WindElement = document.querySelector('#wind span');
const weatherDataContainer = document.getElementById('weather-data')

// Função para receber o Json da API e retornar os Dados
const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();
    console.log(data);

    return data;
    
}
// Função para pegar os dados e jogar no HTML
const showWeatherData = async(city) =>{
    const data = await getWeatherData(city);

    cityElement.innerHTML = data.name; 
    temperatureElement.innerHTML = data.main.temp;
    descriptionElement.innerHTML = data.weather[0].description;
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    umidityElement.innerHTML = `${data.main.humidity}%`;
    WindElement.innerHTML = `${data.wind.speed}km/h`;
    weatherDataContainer.classList.remove('hide');

}

button.onclick = () =>{
    const city = cityInput.value;
    showWeatherData(city);

    console.log(getWeatherData(city));
}
