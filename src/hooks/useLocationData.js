import apiResponse from '../mocks/apiResponse.json'

export function useLocationData () {
  const apiRes = apiResponse

  const auxLocData = apiRes.slice(0, 1)

  const locationData = {
    id: auxLocData[0].CountryId,
    country: auxLocData[0].Country,
    city: auxLocData[0].City
  }
  return { currLocationData: locationData }
}
