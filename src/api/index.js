import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
  const apiUrl = country ? `${url}/countries/${country}` : url

  try {
    const { data } = await axios.get(apiUrl)

    const { confirmed, recovered, deaths, lastUpdate } = data

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    const chartData = data.map(({ confirmed, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: reportDate,
    }))

    return chartData
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`)

    return data.countries
  } catch (error) {
    console.log(error)
  }
}
