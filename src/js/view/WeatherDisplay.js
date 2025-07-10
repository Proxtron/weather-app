export default function weatherDisplayView(weatherData) {
    const weatherDisplayElement = document.createElement("div");
    weatherDisplayElement.innerHTML = `
        <h1>${weatherData.address}</h1>
        <h2>${weatherData.currentTemp}</h2>
    `;

    return weatherDisplayElement;
}