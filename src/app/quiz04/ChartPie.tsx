import React from 'react'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

type Props = {}

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function ChartPie({data}) {
    const options = {
        scales:{
            y:{
                min:0,
                max:1
            }
        }
    }
  return (
    <Pie options={options} data={data}/>
  )
}