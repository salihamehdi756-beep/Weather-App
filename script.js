const apiKey = "c194135f05d04bf2a73113036261105"; // Paste your key here
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=c194135f05d04bf2a73113036261105&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.getElementById("searchBtn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    
    if(response.status == 400 || response.status == 401) {
        alert("Invalid city name or API Key.");
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".description").innerHTML = data.current.condition.text;
        document.querySelector(".humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind: " + data.current.wind_kph + " km/h";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Allow "Enter" key to trigger search
searchBox.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});