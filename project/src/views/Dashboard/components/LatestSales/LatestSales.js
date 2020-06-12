import React, { useState, useEffect } from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import { Bar } from "react-chartjs-2"
import { makeStyles } from "@material-ui/styles"
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
} from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import palette from "../../../../themes/palette"
import { options } from "./chart"

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: "relative",
  },
  actions: {
    justifyContent: "flex-end",
  },
}))

const LatestSales = props => {
  const { className, foodScores, ...rest } = props

  const classes = useStyles()

  let foodLabels = foodScores.map(item => item.createdAt)
  let scores = foodScores.map(item => item.score)
  let foodNames = foodScores.map(item => item.foodName)
  let miles = foodScores.map(item => item.miles)
  
  const data = {
    labels: foodLabels,
    datasets: [
      {
        label: "Score",
        backgroundColor: palette.primary.main,
        data: scores,
        data1: foodNames,
      },
      {
        label: "Car Miles",
        backgroundColor: palette.secondary.main,
        data: miles,
      },
    ],
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Button size="small" variant="text">
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Latest Uploads"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar data={data} options={options} />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

LatestSales.propTypes = {
  className: PropTypes.string,
}

export default LatestSales
