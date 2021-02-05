import React from "react"

import { Grid, Card, Box, CardContent, Typography } from "@material-ui/core"

import CountUp from "react-countup"

function CardItem({ title, value, detail, borderColor }) {
  return (
    <Grid
      item
      component={Card}
      xs={10}
      md={3}
      style={{
        margin: "15px 10px",
        borderBottom: `10px solid ${borderColor}`,
      }}
    >
      <CardContent>
        <Box textAlign="center">
          <Typography variant="h5" color="textSecondary" gutterBottom>
            {title}
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            {value && (
              <CountUp start={0} end={value} duration={2.5} separator="," />
            )}
          </Typography>
        </Box>
      </CardContent>
    </Grid>
  )
}

export default CardItem
