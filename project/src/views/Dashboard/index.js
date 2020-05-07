import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"

import {
  TotalUploaded,
  TotalEmission,
  AverageEmission,
  UsersByDevice,
  LatestSales,
  LatestOrders,
} from "./components"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}))

const Dashboard = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item md={4} xs={12}>
          <TotalUploaded />
        </Grid>
        <Grid item md={4} xs={12}>
          <AverageEmission />
        </Grid>
        <Grid item md={4} xs={12}>
          <TotalEmission />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
