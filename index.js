const inputbox = document.querySelector(".inputbox");
const searchbtn = document.getElementById("searchbtn");
const weatherimg = document.querySelector(".weatherimg");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".description");
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById("wind-speed");
const location_n = document.querySelector(".location-n");
const weather_body = document.querySelector(".weather-body");
async function checkweather(city){
    const api_key = "8ba990ac91fa8f50b11654f50ddd6afa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data =await fetch(`${url}`).then(response =>
        response.json());

    if(weather_data.cod ==='404'){
        location_n.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_n.style.display = "none";
    weather_body.style.display = "flex";
    temp.innerHTML = `${Math.round(weather_data.main.temp-273)}°C`;
    desc.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherimg.src = "./cloud.png";
            break;
        case 'Clear':
            weatherimg.src = "./clear.png";
            break;
        case 'Mist':
            weatherimg.src = "./mist.png";
            break;
        case 'Haze':
            weatherimg.src = "./mist.png";
            break;
        case 'Rain':
            weatherimg.src = "./rain.png";
            break;
        case 'Snow':
            weatherimg.src = "./snow.png";
            break;
    }
}
searchbtn.addEventListener("click",()=>{
    checkweather(inputbox.value);
})
