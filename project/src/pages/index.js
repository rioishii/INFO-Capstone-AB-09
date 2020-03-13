import React from "react"
import theme from "../themes"
import logo from "../images/logo.png"
import AppBar from "@material-ui/core/AppBar"
import Dropzone from "../components/dropzone"
import factsIcon from "../images/factsicon.png"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(7),
  },
  heroContent: {
    paddingLeft: theme.spacing(10),
    marginBottom: theme.spacing(20),
  },
  heroImage: {
    maxWidth: "700px",
    marginTop: theme.spacing(4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  card: {
    marginTop: theme.spacing(6),
    maxWidth: "380px",
    padding: theme.spacing(3),
  },
  scoreCard: {
    textAlign: "center",
    maxWidth: "350px",
  },
  factsIcon: {
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: "#49535B",
    padding: theme.spacing(4),
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
            </div>
          </Toolbar>
        </AppBar>

        <main>
          <Grid container style={{ marginTop: "35px" }} >
            <Grid item md={6}>
              <div className={classes.heroContent}>
                <Typography variant="h3" color="textPrimary" gutterBottom>
                  <strong>You emit what you eat.</strong>
                </Typography>

                <Typography variant="h5" color="textSecondary" paragraph>
                  Foor accounts for 10-30% of your carbon footprint. <br />
                  See how your lunch scores on emissions.
                </Typography>

                <div className={classes.heroButtons}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ color: "#fff" }}
                      >
                        Learn More
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Register My Profile
                      </Button>
                    </Grid>
                  </Grid>
                </div>

                <Card className={classes.card}>
                  <CardContent>
                    <div>
                      <img
                        src={factsIcon}
                        className={classes.factsIcon}
                        alt="factsIcon"
                      />
                    </div>
                    <Typography variant="h5" color="secondary" gutterBottom>
                      <strong>Did you know?</strong>
                    </Typography>
                    <Typography
                      className={classes.title}
                      color="secondary"
                      gutterBottom
                    >
                      Beef and lamb are the most carbon intensive foods! Cattle
                      results in emission of 15-27 kilograms...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Read More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>

            <Grid item md={6} >
              <Container>
                <Dropzone />
              </Container>
            </Grid>
          </Grid>
        </main>

        <footer className={classes.footer}>
          <Typography variant="body2" align="center" color="primary">
            © 2020 Emission Impossible, Inc. All rights reserved
          </Typography>
        </footer>
      </React.Fragment>
    </MuiThemeProvider>
  )
}

export default LandingPage
