import {ajax} from "../tools/ajax"

export const getCities = async (countryCode) => {
    const optionsRequest = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places",
        params: {
            limit: 100, 
            type: "CITY",
            country: countryCode ?? "US",
        },
        headers: {
            'X-RapidAPI-Key': '7deb31ab1emshc4bb95b683c677ep179942jsnc86e6afb0662',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
          }
    };
    return await ajax(optionsRequest);
}