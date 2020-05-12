import React from "react"
import Container from "@material-ui/core/Container"
import Dropzone from "../../components/Dropzone"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import factsIcon from "../../images/factsicon.png"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  hero: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(12),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  heroCard: {
    maxWidth: "380px",
    padding: theme.spacing(3),
  },
  buttonLink: {
    color: "#fff",
    textDecoration: "none",
  },
  factsIcon: {
    marginBottom: theme.spacing(1),
  },
  signin: {
    color: "#49535B",
    textDecoration: "underline",
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <section id="hero">
      <Container className={classes.hero}>
        <Grid container spacing={0} alignItems="center" justify="center" spacing={4}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h1" color="textPrimary" gutterBottom>
              <strong>You emit what you eat.</strong>
            </Typography>

            <Typography variant="subtitle1" color="textPrimary" gutterBottom>
              Food accounts for up to 30% of your carbon footprint. <br />
              See how your lunch scores on emissions.
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link to="/app/signup" className={classes.buttonLink}>
                      See Your Score Now
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>

            <Card className={classes.heroCard}>
              <CardContent>
                <div>
                  <img
                    src={factsIcon}
                    className={classes.factsIcon}
                    alt="factsIcon"
                  />
                </div>
                <Typography variant="subtitle1" color="secondary" gutterBottom>
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
              <CardActions style={{ paddingLeft: "16px" }}>
                <Typography variant="body1" color="textPrimary">
                  Already have an account? <br></br>
                  <Link to="/app/login" className={classes.signin}>
                    Sign in here
                  </Link>
                </Typography>
              </CardActions>
            </Card>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Dropzone />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Hero
