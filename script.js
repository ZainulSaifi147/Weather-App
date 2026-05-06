const apiKey = "28a3028db740086d368c10837ca94973";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();
        

        if (data.cod == "404") {
            alert("City not found");
            return;
        }
        const weatherMain = data.weather[0].main.toLowerCase();

const body = document.body;

if (weatherMain.includes("rain")) {
    body.style.background = "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat";
}

else if (weatherMain.includes("cloud")) {
    body.style.background = "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat";
}

else if (weatherMain.includes("clear")) {
    body.style.background = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat";
}

else if (weatherMain.includes("snow")) {
    body.style.background = "url('https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat";
}

else if (weatherMain.includes("thunderstorm")) {
    body.style.background = "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat";
}

else if (weatherMain.includes("mist") || weatherMain.includes("haze")) {
    body.style.background = "url('https://images.unsplash.com/photo-1487621116730-5d248087c724?q=80&w=1200&auto=format&fit=crop') center/cover no-repeat";
}
// Wind effect
if (data.wind.speed > 10) {
    document.body.style.animation = "shake 0.5s infinite";
}

// Hot weather effect
if (data.main.temp > 35) {
    body.style.filter = "brightness(1.1) saturate(1.3)";
    document.querySelector(".weather-card").style.boxShadow = "0 0 40px red";
}

// Cold weather effect
else if (data.main.temp < 10) {
    body.style.filter = "brightness(0.9) hue-rotate(180deg)";
    document.querySelector(".weather-card").style.boxShadow = "0 0 40px cyan";
}
const temp = data.main.temp;

if (temp > 35) {
    document.querySelector(".weather-card").style.boxShadow = "0 0 30px red";
}
else if (temp < 10) {
    document.querySelector(".weather-card").style.boxShadow = "0 0 30px cyan";
}

        document.getElementById("cityName").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temperature").innerText =
            `🌡 Temperature: ${data.main.temp} °C`;

        document.getElementById("description").innerText =
            `☁ Weather: ${data.weather[0].description}`;

        document.getElementById("humidity").innerText =
            `💧 Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `🌬 Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
}
