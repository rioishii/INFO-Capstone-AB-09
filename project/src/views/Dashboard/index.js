import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import { DataStore } from "@aws-amplify/datastore"
import { FoodScore } from "../../models"

import {
  TotalUploaded,
  TotalEmission,
  AverageEmission,
  LatestOrders,
} from "./components"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}))

const Dashboard = () => {
  const classes = useStyles()

  const [foodScores, updateFoodScores] = useState([])

  useEffect(() => {
    fetchData()
    const subscription = DataStore.observe(FoodScore).subscribe(() =>
      fetchData()
    )
    return () => subscription.unsubscribe
  }, [])

  async function fetchData() {
    const foodScores = await DataStore.query(FoodScore)
    updateFoodScores(foodScores)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item md={4} xs={12}>
          <TotalUploaded foodScores={foodScores} />
        </Grid>
        <Grid item md={4} xs={12}>
          <AverageEmission foodScores={foodScores} />
        </Grid>
        <Grid item md={4} xs={12}>
          <TotalEmission foodScores={foodScores} />
        </Grid>
        <Grid item xs={12}>
          <LatestOrders foodScores={foodScores} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
