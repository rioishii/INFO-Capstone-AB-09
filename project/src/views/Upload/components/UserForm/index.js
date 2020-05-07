import React, { useState } from "react"
import OrganicForm from "../OrganicForm"
import LocalForm from "../LocalForm"
import ServingsForm from "../ServingsForm"
import Result from "../Result"
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
  },
}))

const UserForm = () => {
  const classes = useStyles()
  const [formState, setFormState] = useState({
    step: 1,
    isOrganic: false,
    isLocal: false,
    servings: 1,
  })

  const nextStep = () => {
    const { step } = formState
    console.log(formState)
    setFormState({
      ...formState,
      step: step + 1,
    })
  }

  const prevStep = () => {
    const { step } = formState
    setFormState({
      ...formState,
      step: step - 1,
    })
  }

  const handleChange = input => e => {
    let value
    if (input === "isOrganic" || input === "isLocal") {
      value = e.target.value === "true"
    } else {
      value = e.target.value
    }
    setFormState({
      ...formState,
      [input]: value,
    })
  }

  const { step } = formState
  const { isOrganic, isLocal, servings } = formState
  const values = { isOrganic, isLocal, servings }

  const renderContent = () => {
      console.log(formState)
    switch (step) {
      case 1:
        return (
          <OrganicForm
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <LocalForm
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <ServingsForm
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        )
      default:
        return <Result />
    }
  }

  return (
    <Paper elevation={3} className={classes.root}>
      {renderContent()}
    </Paper>
  )
}

export default UserForm
