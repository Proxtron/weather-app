import pubsub from "./pubsub";
import weatherDisplayView from "../view/WeatherDisplay"

export default {
    weatherContainer: document.getElementById("weather-container"),
    
    init() {
        this.addEventListeners();
    },

    addEventListeners() {
        pubsub.on("displayWeather", (weatherData) => { this.displayWeather(weatherData)})
    },

    displayWeather(weatherData) {
        this.weatherContainer.innerHTML = "";
        const weatherView = weatherDisplayView(weatherData);
        this.weatherContainer.appendChild(weatherView);
    }
};