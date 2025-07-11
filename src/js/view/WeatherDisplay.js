export default function weatherDisplayView(weatherData) {
    const weatherDisplayElement = document.createElement("div");
    weatherDisplayElement.classList.add("weather-display")
    weatherDisplayElement.innerHTML = `
        <img width=300 id="weather-icon">
        <div class="weather-data-section">
            <h1 class="temp-data">${weatherData.currentTemp}°F</h1>
            <h2 class="location-name">${weatherData.address}</h2>
            <hr>
            <h2 class="location-name">${weatherData.description}</h2>
        </div>
    `;

    return weatherDisplayElement;
}