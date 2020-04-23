import React from "react"
import theme from "../themes"
import logo from "../images/logo.png"
import loginImg from "../images/login.png"
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
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignInSide() {
  const classes = useStyles()

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
                <strong>Greenergy</strong>
              </Typography>
            </div>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
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
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Join Now"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>

        <Grid
          item
          xs={false}
          md={7}
          className={classes.image}
          alignItems="center"
        >
          <Hidden smDown>
            <img
              src={loginImg}
              width="500px"
              style={{ marginTop: "75px", marginBottom: "30px" }}
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
