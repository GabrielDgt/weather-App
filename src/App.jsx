import { useEffect, useState } from 'react'
import { getCountries } from './services/getCountries'
import { getCities } from './services/getCities'
import { getWeather } from './services/getWeather'
import { useGetLocation } from './hooks/useGetLocation'

const App = () => {
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  const [weather, setWeather] = useState(null)
  const currLocation = useGetLocation()
  const location = currLocation.location
  console.log(location)
  useEffect(() => {
    (async () => {
      setCountries(await getCountries())
    })()
  }, [])

  const countryHandler = async e => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value))
    setWeather(null)
  }
  const cityHandler = async e => e.currentTarget.value && setWeather(await getWeather(e.currentTarget.value))

  return (
    <>
      <div>
        <label>Select a Country</label>
        <select name='country' id='country' onChange={countryHandler}>
          <option value=''>Select</option>
          {countries.map(country => <option key={country.cca2} value={country.cca2}>{country.name.common}</option>)}
        </select>
      </div>

      {cities.length > 0 && (
        <div>
          <label>Select a City</label>
          <select name='city' id='city' onChange={cityHandler}>
            <option value=''>Select</option>
            {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
          </select>
        </div>
      )}

      <hr />

      {weather && (
        <div>
          <h2>Current Temperature: {weather.current.temp_c.toFixed()}º</h2>
          <p>Feels Like: {weather.current.feelslike_c.toFixed()}º</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <span>
            <img src={weather.current.condition.icon} alt='' />
            <figcaption>{weather.current.condition.text}</figcaption>
          </span>
        </div>
      )}

    </>
  )
}

export default App
