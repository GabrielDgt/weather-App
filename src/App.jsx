import { useEffect, useState } from 'react'
import { getWeather } from './services/getWeather'
// import { useLocationData } from './hooks/useLocationData'
// import { getLocation } from './tools/getLocation'

const App = () => {
  // const locationCoords = getLocation()
  // const locationData = useLocationData(locationCoords)
  // console.log(locationData)
  const [city, setCity] = useState(null)
  const [weather, setWeather] = useState()
console.log(weather)
  useEffect(() => {
    (async () => {
      setWeather(await getWeather(city))
    })()
  }, [city])

  const handleSubmit = (event) => {
    event.preventDefault()
    const newSearch = new window.FormData(event.target)
    const search = newSearch.get('search')
    console.log(search)
    setCity(search)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='search' placeholder='Caracas, Buenos Aires, Madrid, Barcelona... ' />
        <button type='submit'>Find</button>
      </form>
      <section>
        <h2>Location: {weather && weather.location.name}</h2>
        <h3>Current Temperature: {weather && weather.current.temp_c.toFixed()}º</h3>
        <p>Feels Like: {weather && weather.current.feelslike_c.toFixed()}º</p>
        <p>Humidity: {weather && weather.current.humidity}%</p>
        <span>
          <img src={weather && weather.current.condition.icon} alt='' />
          <figcaption>{weather && weather.current.condition.text}</figcaption>
        </span>
      </section>
    </div>
  )
}

export default App
