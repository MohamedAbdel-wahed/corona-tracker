import React from "react"

import { Bar } from "react-chartjs-2"

function BarChart({ data, country }) {
  const { confirmed, recovered, deaths } = data
  return (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(50, 134, 212, 0.5)",
              "rgba(0, 255, 0, 0.7)",
              "rgba(250, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        title: { display: true, text: country },
      }}
    />
  )
}

export default BarChart
