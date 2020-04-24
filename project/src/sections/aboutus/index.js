import React from "react"
import rio from "../../images/rio.png"
import wobin from "../../images/Wobin.png"
import calvin from "../../images/calvin.png"
import ray from "../../images/Ray.png"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  aboutUs: {
    backgroundColor: "#49535B",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  aboutUsBox: {
    display: "flex",
  },
  aboutUsImg: {
    width: "128px",
    height: "128px",
    marginRight: theme.spacing(2)
  },
  aboutUsProfile: {
    color: "white",
  },
}))

const Aboutus = () => {
  const classes = useStyles()

  return (
    <section>
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        style={{ marginBottom: "50px" }}
      >
        <strong>About Us</strong>
      </Typography>
      <div className={classes.aboutUs}>
        <Container>
          <Grid container spacing={10} >
            <Grid item md={6} className={classes.aboutUsBox}>
              <img
                src={wobin}
                className={classes.aboutUsImg}
                alt="wobin"
              />
              <Typography variant="body1" className={classes.aboutUsProfile}>
                <strong>Wo Bin Chen</strong> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent arcu est, lobortis quis quam in, tristique sagittis
                elit. Nam elementum pulvinar efficitur. Aliquam erat volutpat.
                Mauris efficitur, tellus et vehicula sodales, quam turpis
                ultricies ligula,
              </Typography>
            </Grid>
            <Grid item md={6} className={classes.aboutUsBox}>
              <img
                src={calvin}
                className={classes.aboutUsImg}
                alt="calvin"
              />
              <Typography variant="body1" className={classes.aboutUsProfile}>
                <strong>Calvin Chen</strong> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent arcu est, lobortis quis quam in, tristique sagittis
                elit. Nam elementum pulvinar efficitur. Aliquam erat volutpat.
                Mauris efficitur, tellus et vehicula sodales, quam turpis
                ultricies ligula,
              </Typography>
            </Grid>
            <Grid item md={6} className={classes.aboutUsBox}>
              <img
                src={rio}
                className={classes.aboutUsImg}
                alt="rio"
              />
              <Typography variant="body1" className={classes.aboutUsProfile}>
                <strong>Rio Ishii</strong> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent arcu est, lobortis quis quam in, tristique sagittis
                elit. Nam elementum pulvinar efficitur. Aliquam erat volutpat.
                Mauris efficitur, tellus et vehicula sodales, quam turpis
                ultricies ligula,
              </Typography>
            </Grid>
            <Grid item md={6} className={classes.aboutUsBox}>
              <img
                src={ray}
                className={classes.aboutUsImg}
                alt="ray"
              />
              <Typography variant="body1" className={classes.aboutUsProfile}>
                <strong>Ray Zhang</strong> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent arcu est, lobortis quis quam in, tristique sagittis
                elit. Nam elementum pulvinar efficitur. Aliquam erat volutpat.
                Mauris efficitur, tellus et vehicula sodales, quam turpis
                ultricies ligula,
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  )
}

export default Aboutus
