import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Home() {

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["July", "August", "September", "October", "November"],
      datasets: [
        {
          label: "Douglas fir and western larch, production 2022",
          data: [288.1, 296.2, 286.9, 202.8, 241.7],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)"
        }
      ]
    })
    setChartOptions({
      // this aspect ratio keeps its proportions 
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          dispaly: true,
          text: "Douglas fir and western larch, production"
        }
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="chart">
          Go to Chart Page
        </Link>
        <div style={{width: "80%"}}>
          <Bar options={chartOptions} data={chartData}/>
        </div>

      </main>

    </div>
  )
}
