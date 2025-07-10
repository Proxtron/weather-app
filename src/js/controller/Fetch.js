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
        console.error(error.message);
    }
}

async function processResponse(response) {
    const json = await response.json();
	const data = {
		"address": json.resolvedAddress,
		"currentTemp": Math.round(json.currentConditions.temp)
	};
    return data;
}