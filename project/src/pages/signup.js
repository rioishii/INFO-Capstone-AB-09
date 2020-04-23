import React from "react"
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
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
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
    margin: theme.spacing(4, 0, 4),
    minWidth: 300,
  },
}))

export default function SignInSide() {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} className={classes.image}>
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
            <img src={graph} />
          </div>
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
              <img src={logo} alt="logo" style={{marginRight: "10px"}}/>
              <Typography
                variant="h5"
                color="primary"
                className={classes.toolbarTitle}
              >
                <strong>Sign Up To Greenergy</strong>
              </Typography>
            </div>

            <form className={classes.form} noValidate>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
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
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
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
                  <Link href="#" variant="body2">
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