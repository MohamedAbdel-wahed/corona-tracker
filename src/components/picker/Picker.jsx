import React, { useState, useEffect } from "react"

import { Box, Select, FormControl, MenuItem } from "@material-ui/core"

import { fetchCountries } from "../../api"

function Picker({ handleSelect }) {
  const [data, setData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("world")

  useEffect(() => {
    fetchCountries().then((res) => setData(res))
  }, [fetchCountries])

  const handleChange = (e) => {
    setSelectedCountry(e.target.value)
    handleSelect(e.target.value)
  }

  return (
    <Box
      my={5}
      display="flex"
      justifyContent="center"
      style={{ width: "100%" }}
    >
      <FormControl style={{ width: "70%" }}>
        <Select
          value={selectedCountry}
          variant="outlined"
          onChange={handleChange}
        >
          <MenuItem value="world">WorldWide</MenuItem>
          {data &&
            data.map(({ name }, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Picker
