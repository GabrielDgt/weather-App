import { useEffect, useState } from 'react'

export function useGetLocation () {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    function getCurrentLoc (pos) {
      const getCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude }
      setLocation(getCoords)
    }
    function onError (err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }
    navigator.geolocation.getCurrentPosition(getCurrentLoc, onError, options)
  }, [])

  return { location }
}
