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
			throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
		}
		return response;
	} catch(error) {
		throw new Error(`Failed to fetch weather data: ${error.message}`);
	}
	
}

async function processResponse(response) {
	const json = await response.json();
	const requiredKeys = [
		"resolvedAddress",
		"currentConditions",
		"description"
	];

    const currentConditionsRequired = [
        "temp",
        "icon"
    ];

	for(const key of requiredKeys) {
		if(!(key in json)) {
			throw new Error(`Invalid data from api: missing key ${key}`)
		}
	}

    for(const key of currentConditionsRequired) {
        if(!(key in json.currentConditions)) {
            throw new Error(`Invalid data from api: missing current conditions key ${key}`);
        }
    }

	const data = {
		"address": json.resolvedAddress,
		"currentTemp": Math.round(json.currentConditions.temp),
        "icon": json.currentConditions.icon,
		"description": json.description
		
	};
    
	return data; 
}