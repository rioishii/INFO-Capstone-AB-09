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
  heroContent: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  heroButtons: {
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
  signin: {
    color: "#49535B"
  }
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Container className={classes.hero}>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <div className={classes.heroContent}>
            <Typography variant="h3" color="textPrimary" gutterBottom>
              <strong>You emit what you eat.</strong>
            </Typography>

            <Typography variant="h5" color="textSecondary" paragraph>
              Food accounts for 10-30% of your carbon footprint. <br />
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
                <Typography variant="body1" color="textSecondary">
                  Already have an account? <br></br>
                  <Link to="/app/login" className={classes.signin}>
                    Sign in here
                  </Link>
                </Typography>
                {/* <Button size="small">Read More</Button> */}
              </CardActions>
            </Card>
          </div>
        </Grid>

        <Grid item md={6} style={{ textAlign: "center" }}>
          <Dropzone />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
