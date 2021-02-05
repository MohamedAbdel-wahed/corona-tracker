import React from "react"

import { Grid, Box } from "@material-ui/core"

import CardItem from "./CardItem"

function CardsContainer({ confirmed, recovered, deaths }) {
  return (
    <Box my={5}>
      <Grid container justify="center" spacing={4}>
        <CardItem
          title={"Infected"}
          {...confirmed}
          borderColor={"rgba(0, 0, 128, 0.7)"}
        />
        <CardItem
          title={"Recovered"}
          {...recovered}
          borderColor={"rgba(0, 255, 0, 0.7)"}
        />
        <CardItem
          title={"Deaths"}
          {...deaths}
          borderColor={"rgba(240, 29, 14, 0.7)"}
        />
      </Grid>
    </Box>
  )
}

export default CardsContainer
