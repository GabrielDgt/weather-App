import { useState, useEffect } from 'react'
import { getCurrLocData } from './../services/getCurrLocData'

export function useLocationData (locationCoords) {
  const [locationData, setLocationData] = useState(null)

  useEffect(() => {
    if (locationCoords === null) return
    const auxLocdata = getCurrLocData(locationCoords)
    auxLocdata.then(resp => {
      const data = resp.slice(0, 1)
      setLocationData({
        id: data[0].postal_code,
        country: data[0].country,
        city: data[0].area,
        locality: data[0].locality,
        region: data[0].region
      })
    })
  }, [locationCoords])

  return locationData
}
