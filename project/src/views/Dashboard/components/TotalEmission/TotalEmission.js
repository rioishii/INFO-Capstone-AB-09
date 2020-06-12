import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core"
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  content: {
    alignItems: "center",
    display: "flex",
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
}))

const TotalEmission = props => {
  const { className, foodScores, ...rest } = props

  const classes = useStyles()

  let total = calcTotal()

  function calcTotal() {
    let sum = foodScores.reduce(function(s, a) {
      return s + a.miles
    }, 0)

    return sum
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="inherit"
              gutterBottom
              variant="body1"
            >
              Total Miles Driven
            </Typography>
            <Typography color="inherit" variant="h3">
              {total} Miles
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <DirectionsCarIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TotalEmission
