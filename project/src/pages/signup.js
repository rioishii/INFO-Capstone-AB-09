import React, { useState } from "react"
import { navigate } from '@reach/router'
import theme from "../themes"
import logo from "../images/logo.png"
import graph from "../images/graph.png"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Typography from "@material-ui/core/Typography"
import { Auth } from "aws-amplify"
import Validate from "../utility/FormValidation"
import FormErrors from "../components/FormErrors"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  image: {},
  mainGrid: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
    minWidth: 300,
  },
  img: {
    width: "75%",
    height: "auto",
  },
}))

function Signup() {
  const classes = useStyles()

  const initialState = {
    firstname: "",
    lastname: "",
    password: "",
    passconf: "",
    email: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false,
    },
  }
  const [data, setData] = useState(initialState)

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const clearErrorState = () => {
    setData({
      ...data,
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false,
      },
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    clearErrorState()
    const error = Validate(data)
    if (error) {
      setData({
        ...data,
        errors: { ...data.errors, ...error },
      })
    }

    try {
      const user = await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          "custom:firstname": data.firstname,
          "custom:lastname": data.lastname,
        },
      })
      console.log({ user })
      navigate("/dashboard")
    } catch (error) {
      let err = null
      !error.message ? (err = { message: error }) : (err = error)
      setData({
        errors: {
          ...data.errors,
          cognito: err,
        },
      })
      console.log("error signing up:", error)
    }
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} className={classes.image}>
          <Hidden xsDown>
            <Typography
              variant="h4"
              color="textSecondary"
              style={{
                marginTop: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              Discover how your food contributes to your carbon footprint.
            </Typography>
            <div style={{ textAlign: "center", marginTop: "125px" }}>
              <img src={graph} alt="graph icon" className={classes.img} />
            </div>
          </Hidden>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          component={Paper}
          elevation={6}
          square
          className={classes.mainGrid}
        >
          <div className={classes.paper}>
            <div
              style={{
                marginBottom: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={logo} alt="logo" style={{ marginRight: "10px" }} />
              <Typography
                variant="h5"
                color="primary"
                className={classes.toolbarTitle}
              >
                <strong>Sign Up To Greenergy</strong>
              </Typography>
            </div>

            <FormErrors formerrors={data.errors} />

            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="firstname"
                    variant="outlined"
                    required
                    id="firstname"
                    fullWidth
                    label="First Name"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Hidden smDown>
                  <Grid item xs={12} md={6} />
                </Hidden>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="passconf"
                    name="passconf"
                    label="Confirm Password"
                    type="password"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Creating this means that you are okay with us using your data to Creating this means that you are okay with us using your data to Creating this means that you are okay with us using your data to Creating this means that you are okay with us using your data to"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ color: "#fff" }}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-start">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default Signup
