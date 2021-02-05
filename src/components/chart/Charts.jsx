import React, { useState, useEffect } from "react"

import { Box } from "@material-ui/core"

import LineChart from "./LineChart"
import BarChart from "./BarChart"

import { fetchDailyData } from "../../api"

function Charts({ countryData, country }) {
  const [globalData, setGlobalData] = useState([])

  useEffect(() => {
    fetchDailyData().then((res) => setGlobalData(res))
  }, [])

  return (
    <Box
      my={5}
      display="flex"
      justifyContent="center"
      style={{ width: " 100%" }}
    >
      {country ? (
        <Box style={{ width: " 85%" }}>
          {countryData && <BarChart data={countryData} country={country} />}
        </Box>
      ) : (
        <Box style={{ width: " 85%" }}>
          {globalData && <LineChart data={globalData} />}
        </Box>
      )}
    </Box>
  )
}

export default Charts
