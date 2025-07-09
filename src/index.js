import "./css/reset.css";
import "./css/style.css";

const API_KEY = "B68NJ32CSW9BF9FFDJD4F3ESM";

async function fetchWeatherData(cityName) {
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${API_KEY}`;
	try {
		const response = await fetch(url);
		if (response.status !== 200) {
			throw new Error(`HTTP Error: Code ${response.status}`);
		}
        return response;
	} catch (error) {
        console.error(error.message);
    }
}

async function processResponse(response) {
    const json = await response.json();
	console.log(json);
	const data = {
		"address": json.resolvedAddress,
		"currentTemp": Math.round(json.currentConditions.temp)
	};
    return data;
}

fetchWeatherData("Oakland")
	.then((response) => processResponse(response))
    .then((data) => console.log(data))
	.catch((error) => console.log(error));
