// export async function getLocation () {
//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   }
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve({ lat: position.coords.latitude, lng: position.coords.longitude }),
//       error => reject(new Error(`Failed to resolve location. Reason: ${error.message} `),
//         options)
//     )
//   })
// }

const coords = {}

export function getLocation () {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  function getCurrentLoc (pos) {
    coords.lat = pos.coords.latitude
    coords.lng = pos.coords.longitude
  }
  function onError (err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }
  navigator.geolocation.getCurrentPosition(getCurrentLoc, onError, options)

  return coords
}
