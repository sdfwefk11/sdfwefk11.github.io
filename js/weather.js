const MY_WEATHER_API_KEY = "99960dd689032ddafd0fad2517955588";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_WEATHER_API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const getWeatherSpan = document.querySelector("#weather span:first-child");
        const getCitySpan = document.querySelector("#weather span:nth-child(2)");
        getCitySpan.innerText = data.name;
        getWeatherSpan.innerText = `(${data.weather[0].main} / ${data.main.temp})`;

    });
}


function onGeoErr(){
    alert("ERR");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

