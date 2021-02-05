import React from "react"

import { Box, Typography } from "@material-ui/core"

function Header({ date }) {
  return (
    <div>
      <Box my={2} textAlign="center">
        <Typography
          variant="h4"
          color="secondary"
          style={{ textTransform: "uppercase", fontWeight: 600 }}
          gutterBottom
        >
          Corona Tracker
        </Typography>
        <Box mt={2}>
          <Typography variant="h6" color="primary">
            {new Date(date).toDateString()}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Header
