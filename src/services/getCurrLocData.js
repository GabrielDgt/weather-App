export function getCurrLocData (currentCoords) {
  if (currentCoords === null) return

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7deb31ab1emshc4bb95b683c677ep179942jsnc86e6afb0662',
      'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
    }
  }

  return fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${currentCoords.lat}%2C${currentCoords.lng}&language=en`, options)
    .then(response => response.json())
    .then(response => {
      const { results } = response
      return results
    })
}
