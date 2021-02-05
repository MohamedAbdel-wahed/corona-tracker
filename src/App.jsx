import React, { useState, useEffect } from "react"

import { Container } from "@material-ui/core"

import { Header, CardsContainer, Picker, Charts } from "./components"

import { fetchData } from "./api"

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState("")

  useEffect(() => {
    fetchData().then((res) => (res ? setData(res) : setData({})))
  }, [])

  const handleSelect = (selected) => {
    if (selected === "world") {
      setCountry("")
      fetchData().then((res) => (res ? setData(res) : setData({})))
    } else {
      setCountry(selected)
      fetchData(selected).then((res) => (res ? setData(res) : setData({})))
    }
  }

  return (
    <Container>
      <Header date={data.lastUpdate} />
      <CardsContainer {...data} />
      <Picker handleSelect={handleSelect} />
      <Charts countryData={data} country={country} />
    </Container>
  )
}

export default App
