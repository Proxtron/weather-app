const API_KEY = "B68NJ32CSW9BF9FFDJD4F3ESM";

export async function getWeatherData(location) {
    const response = await fetchWeatherData(location);
    return await processResponse(response);
}

async function fetchWeatherData(cityName) {
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${API_KEY}`;
	try {
		const response = await fetch(url);
		if (response.status !== 200) {
			throw new Error(`HTTP Error: Code ${response.status}`);
		}
        return response;
	} catch (error) {
        throw new Error(`Failed to fetch weather data`)
    }
}

async function processResponse(response) {
	try {
		const json = await response.json();
		const data = {
			"address": json.resolvedAddress,
			"currentTemp": Math.round(json.currentConditions.temp)
		};
		return data;
	} catch (error) {
		throw new Error(`Error occured when processing weather data`);
	}
}