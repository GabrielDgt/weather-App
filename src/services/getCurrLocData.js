export function getCurrLocData ({ location }) {
  const { lat, lng } = location

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7deb31ab1emshc4bb95b683c677ep179942jsnc86e6afb0662',
      'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
    }
  }
  fetch(`https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${lat}&longitude=${lng}&range=0`, options)
    .then(response => response.json())
    .then(response => console.log(response))
}
