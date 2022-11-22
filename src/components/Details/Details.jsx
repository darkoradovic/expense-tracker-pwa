import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Divider, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles.js'
import useTransactions from '../../useTransactions.js'
import {Chart, ArcElement, Title, Legend,Tooltip} from 'chart.js'

const Details = ({ title }) => {
    const classes = useStyles()
    Chart.register(ArcElement);
    Chart.register(Legend);
    Chart.register(Tooltip);
    const {total, chartData} =useTransactions(title);
   
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <Divider variant="middle"/>
            <CardContent>
                <Typography variant='h5'>€{total}</Typography>
            <Doughnut data={chartData} options={{
  plugins: {
    tooltip: true,
   
    legend: {
      display: true,
      position: "top",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
}} />
            </CardContent>
        </Card>
    )
}

export default Details