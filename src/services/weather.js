import {ajax} from "../tools/ajax"

export const getWeather = async (cityName) => {
    const optionsRequest = {
        method: "GET",
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: cityName ?? "Miami", 
            days: '3'
        },
        headers: {
            'X-RapidAPI-Key': '7deb31ab1emshc4bb95b683c677ep179942jsnc86e6afb0662',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    return await ajax(optionsRequest);
}