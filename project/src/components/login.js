import React, { useState } from "react"
import { navigate } from "@reach/router"
import theme from "../themes"
import Logo from "./Logo"
import loginImg from "../images/login.png"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import { Link } from "gatsby"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Typography from "@material-ui/core/Typography"
import { Auth } from "aws-amplify"
import Validate from "../utility/FormValidation"
import FormErrors from "./FormErrors"
import { setUser } from "../utility/Auth"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  image: {
    textAlign: "center",
  },
  mainGrid: {
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
  link: {
    color: "#6CAE75",
    textDecoration: "none",
    "&:hover, &:focus": {
      textDecoration: "underline",
      textDecorationColor: "#8ED73D",
    },
  },
}))

function Login() {
  const classes = useStyles()

  const initialState = {
    password: "",
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
      await Auth.signIn(data.email, data.password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        email: user.username,
      }
      setUser(userInfo)
      navigate("/app/dashboard")
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
        <Grid
          item
          xs={12}
          md={5}
          component={Paper}
          elevation={6}
          square
          className={classes.mainGrid}
        >
          <div className={classes.paper}>
            <div style={{ marginBottom: "25px" }}>
              <Logo text="Greenergy" />
            </div>
            <FormErrors formerrors={data.errors} />
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleInputChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ color: "#fff" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" className={classes.link}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/app/signup" className={classes.link}>
                    Don't have an account? Join Now
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>

        <Grid item xs={false} md={7} className={classes.image}>
          <Hidden smDown>
            <img
              src={loginImg}
              width="500px"
              style={{ marginTop: "75px", marginBottom: "30px" }}
              alt="icon"
            />
            <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
              <Typography color="textSecondary">
                Did you know? <br></br>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default Login
