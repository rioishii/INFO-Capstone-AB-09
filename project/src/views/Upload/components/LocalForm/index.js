import React from "react"
import { Typography } from "@material-ui/core"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
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

const LocalForm = props => {
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
                <strong>Is your food local?</strong>
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-label="isLocal"
              name="isLocal"
              value={String(values.isLocal)}
              onChange={handleChange('isLocal')}
              row
              className={classes.group}
            >
              <FormControlLabel
                value="true"
                control={
                  <Radio
                    icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                    checkedIcon={<CheckBoxIcon fontSize="large" />}
                  />
                }
                label="Yes"
                style={{ marginRight: "50px" }}
              />
              <FormControlLabel
                value="false"
                control={
                  <Radio
                    icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                    checkedIcon={<CheckBoxIcon fontSize="large" />}
                  />
                }
                label="No"
              />
            </RadioGroup>
            <div className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "250px" }}
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default LocalForm
