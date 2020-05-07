import React from "react"
import { Typography } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import FormLabel from "@material-ui/core/FormLabel"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"

import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.neutral,
    height: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  backIcon: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  inner: {
    textAlign: "center",
    paddingTop: theme.spacing(3),
  },
  questionText: {
    marginBottom: theme.spacing(6),
  },
  group: {
    marginTop: theme.spacing(2),
    justifyContent: "center",
  },
  button: {
    textAlign: "center",
    marginTop: theme.spacing(8),
  },
}))

const ServingsForm = props => {
  const classes = useStyles()

  const { values, handleChange } = props

  const handleNext = e => {
    e.preventDefault()
    props.nextStep()
  }

  const handlePrev = e => {
    e.preventDefault()
    props.prevStep()
  }

  return (
    <div className={classes.root}>
      <div className={classes.backIcon}>
        <IconButton onClick={handlePrev}>
          <ArrowBackIcon fontSize="large" color="secondary" />
        </IconButton>
      </div>
      <div className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.questionText}>
            <Typography variant="h1" color="primary" gutterBottom>
              <strong>Questions</strong>
            </Typography>
            <Typography variant="body1" color="textPrimary" gutterBottom>
              For more precise calculation, please answer these questions.
            </Typography>
          </div>

          <FormControl component="fieldset">
            <FormLabel component="legend">
              <Typography variant="h1" color="secondary" gutterBottom>
                <strong>How many servings?</strong>
              </Typography>
            </FormLabel>
            <div className={classes.group}>
              <TextField
                id="outlined-number"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                style={{ width: "50%" }}
                defaultValue={values.servings}
                onChange={handleChange('servings')}
              />
            </div>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "250px" }}
                onClick={handleNext}
              >
                Calculate!
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default ServingsForm
