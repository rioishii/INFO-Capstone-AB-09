import React from "react"
import Dropzone from "../../components/Dropzone"
import UserForm from "./components/UserForm"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}))

const Upload = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={5} xs={12}>
          <Dropzone />
        </Grid>
        <Grid item sm={7} xs={12}>
          <UserForm />
        </Grid>
      </Grid>
    </div>
  )
}

export default Upload
