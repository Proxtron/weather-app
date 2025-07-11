export default function weatherDisplayView(weatherData, usUnits) {
    const weatherDisplayElement = document.createElement("div");

    const tempDisplayed = usUnits ? weatherData.currentTemp : weatherData.currentTempMetric;
    const unitSymbol = usUnits ? "F" : "C";
    weatherDisplayElement.classList.add("weather-display")
    weatherDisplayElement.innerHTML = `
        <img width=300 id="weather-icon">
        <div class="weather-data-section">
            <h1 class="temp-data">${tempDisplayed}°${unitSymbol}</h1>
            <h2 class="location-name">${weatherData.address}</h2>
            <hr>
            <h2 class="location-name">${weatherData.description}</h2>
        </div>
    `;

    return weatherDisplayElement;
}