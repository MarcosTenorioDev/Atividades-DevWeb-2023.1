const apiKey = "5df9b5cdde7b22bb7d08ed3ef9a963ef"; 

const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    console.log(data)
}

const showWeatherData = (city) =>{
    getWeatherData(city);
}

console.log(getWeatherData("Recife"));