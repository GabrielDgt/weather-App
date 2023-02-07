import { ajax } from './../tools/ajax'

export const getReverseGeocoding = async () => {
  function onError (err) {
    console.error(err)
  }

  function geoLocation (position) {
    const geoLoc = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    return geoLoc
  }

  const options = { timeout: 6000 }

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(geoLocation, onError, options)
    const optionsRequest = {
      method: 'GET',
      url: 'https://geocodeapi.p.rapidapi.com/GetNearestCities',
      params: { latitude: '53.55196', longitude: '9.98558', range: '0' },
      headers: {
        'X-RapidAPI-Key': '7deb31ab1emshc4bb95b683c677ep179942jsnc86e6afb0662',
        'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
      }
    }
    return await ajax(optionsRequest)
  } else {
    console.error('Oops! This browser does not support HTML Geolocation.')
  }
}
