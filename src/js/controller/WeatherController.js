import pubsub from "./pubsub";
import weatherDisplayView from "../view/WeatherDisplay"

export default {
    weatherContainer: document.getElementById("weather-container"),
    errorContainer: document.getElementById("error-message"),
    
    init() {
        this.addEventListeners();
    },

    addEventListeners() {
        pubsub.on("displayWeather", (weatherData) => { this.displayWeather(weatherData)});
        pubsub.on("showError", (errorMessage) => { this.showError(errorMessage) });
        pubsub.on("hideError", () => { this.hideError() });
    },

    displayWeather(weatherData) {
        this.weatherContainer.innerHTML = "";
        const weatherView = weatherDisplayView(weatherData);
        this.weatherContainer.appendChild(weatherView);
    },

    showError(errorMessage) {
        this.errorContainer.textContent = errorMessage;
    },

    hideError() {
        this.errorContainer.textContent = "";
    }
};