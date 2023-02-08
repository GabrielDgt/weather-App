import { useEffect, useState } from 'react'

export function useGetLocation () {
  const [initial, setInitial] = useState(null)

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    function getCurrentLoc (pos) {
      const getCoords = pos.coords
      setInitial({
        lat: getCoords.latitude,
        lng: getCoords.longitude
      })
    }
    function onError (err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }
    navigator.geolocation.getCurrentPosition(getCurrentLoc, onError, options)
  }, [])

  return { initial }
}
