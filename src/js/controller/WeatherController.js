import pubsub from "./pubsub";
import weatherDisplayView from "../view/WeatherDisplay"

export default {
    weatherContainer: document.getElementById("weather-container"),
    usUnits: true,
    weatherData: null,

    iconMap: {
        snow: {
            src: import("../../assets/icon/snow.svg"),
            alt: "Snowy conditions"
        },
        rain: {
            src: import("../../assets/icon/rain.svg"),
            alt: "Rainy conditions"
        },
        fog: {
            src: import("../../assets/icon/fog.svg"),
            alt: "Foggy conditions"
        },
        wind: {
            src: import("../../assets/icon/wind.svg"),
            alt: "Windy conditions"
        },
        cloudy: {
            src: import("../../assets/icon/cloudy.svg"),
            alt: "Cloudy conditions"
        },
        "partly-cloudy-day": {
            src: import("../../assets/icon/partly-cloudy-day.svg"),
            alt: "Partly cloudy conditions"
        },
        "partly-cloudy-night": {
            src: import("../../assets/icon/partly-cloudy-night.svg"),
            alt: "Night-time. Partly cloudy conditions"
        },
        "clear-day": {
            src: import("../../assets/icon/clear-day.svg"),
            alt: "Clear conditions"
        },
        "clear-night": {
            src: import("../../assets/icon/clear-night.svg"),
            alt: "Night-time. Clear conditions"
        }
    },
    
    init() {
        this.addEventListeners();
    },

    addEventListeners() {
        pubsub.on("displayWeather", (weatherData) => { 
            this.weatherData = weatherData;
            this.displayWeather();
        });

        pubsub.on("unitChange", () => this.toggleUnits());
    },

    displayWeather() {
        this.weatherContainer.innerHTML = "";

        const weatherView = weatherDisplayView(this.weatherData, this.usUnits);
        
        const weatherIcon = weatherView.querySelector("#weather-icon");
        this.iconMap[this.weatherData.icon].src.then((icon) => weatherIcon.src = icon.default);
        weatherIcon.alt = this.iconMap[this.weatherData.icon].alt;

        this.weatherContainer.appendChild(weatherView);
    },

    toggleUnits() {
        this.usUnits = !this.usUnits
        if(this.weatherData) {
            this.displayWeather();
        }
    }
};