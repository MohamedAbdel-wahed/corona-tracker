import React from "react"

import { Line } from "react-chartjs-2"

function LineChart({ data }) {
  return (
    <Line
      data={{
        labels: data.map(({ date }) => date),
        datasets: [
          {
            label: "Infected",
            data: data.map(({ confirmed }) => confirmed),
            borderColor: "#3286d4",
            backgroundColor: "rgba(50, 134, 212, 0.5)",
            fill: true,
          },
          {
            label: "Deaths",
            data: data.map(({ deaths }) => deaths),
            borderColor: "#d62543",
            backgroundColor: "rgba(250, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  )
}

export default LineChart
