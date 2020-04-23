import React from "react"
import theme from "../themes"
import logo from "../images/logo.png"
import feature1 from "../images/feature1.png"
import feature2 from "../images/feature2.png"
import feature3 from "../images/feature3.png"
import whyus1 from "../images/whyus1.png"
import whyus2 from "../images/whyus2.png"
import rio from "../images/rio.png"
import wobin from "../images/Wobin.png"
import calvin from "../images/calvin.png"
import ray from "../images/Ray.png"
import AppBar from "@material-ui/core/AppBar"
import Link from "@material-ui/core/Link"
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
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    background: "transparent",
    boxShadow: "none",
    verticalAlign: "center",
  },
  logo: {
    marginRight: theme.spacing(1.5),
  },
  link: {
    marginLeft: theme.spacing(8),
    fontSize: "1.4rem",
  },
  heroContent: {
    paddingLeft: theme.spacing(20),
    marginBottom: theme.spacing(20),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  account: {
    marginTop: theme.spacing(4),
  },
  heroCard: {
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
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
  whyus: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(10),
  },
  whyusImg: {
    marginRight: theme.spacing(4),
  },
  whyusBodyText: {
    fontWeight: "100",
    fontSize: "22px",
  },
  aboutUs: {
    backgroundColor: "#49535B",
  },
  aboutUsBox: {
    display: "flex",
    marginBottom: theme.spacing(7),
    marginTop: theme.spacing(7),
    paddingRight: theme.spacing(10),
  },
  aboutUsProfile: {
    color: "white",
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
            </div>
            <Typography
              variant="h5"
              color="primary"
              className={classes.toolbarTitle}
            >
              <strong>Greenergy</strong>
            </Typography>
            <nav>
              <Link color="textPrimary" href="#" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" href="#" className={classes.link}>
                Features
              </Link>
              <Link color="textPrimary" href="#" className={classes.link}>
                Why Us?
              </Link>
              <Link color="textPrimary" href="#" className={classes.link}>
                About Us
              </Link>
              <Link href="#" color="textPrimary" className={classes.link}>
                Log In
              </Link>
            </nav>
          </Toolbar>
        </AppBar>

        <main>
          <Grid container style={{ marginTop: "35px" }}>
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
                        See Your Score Now
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
                    <Button size="small">Read More</Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>

            <Grid item md={6}>
              <Container>
                <Dropzone />
              </Container>
            </Grid>
          </Grid>

          <Container className={classes.cardGrid} maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              color="secondary"
              style={{ marginBottom: "50px" }}
            >
              <strong>Features</strong>
            </Typography>
            <Grid container spacing={4}>
              <Grid item md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={feature1}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" color="primary">
                      <strong>
                        Calculate how much carbon is emitted from your food
                      </strong>
                    </Typography>
                    <Typography>
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequu
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={feature2}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" color="primary">
                      <strong>
                        Compare your carbon footprint to other peers
                      </strong>
                    </Typography>
                    <Typography>
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequu
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={feature3}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" color="primary">
                      <strong>Provide solutions to the things you eat</strong>
                    </Typography>
                    <Typography>
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequu
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>

          <Container>
            <Typography
              variant="h4"
              align="center"
              color="secondary"
              style={{ marginBottom: "50px" }}
            >
              <strong>Why Us?</strong>
            </Typography>
            <div className={classes.whyus}>
              <img className={classes.whyusImg} src={whyus1} width="175px" />
              <div className={classes.whyusText}>
                <Typography variant="h5" color="textPrimary">
                  <strong>You Can Make a Difference</strong>
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.whyusBodyText}
                >
                  Food is one of the largest contributors to climate change. You
                  can use our application to make a difference in the world by
                  becoming more aware of your food choices.
                </Typography>
              </div>
            </div>

            <div className={classes.whyus}>
              <img className={classes.whyusImg} src={whyus2} />
              <div className={classes.whyusText}>
                <Typography variant="h5" color="textPrimary">
                  <strong>Machine Learning</strong>
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.whyusBodyText}
                >
                  Emission Impossible is the newest application platform for
                  calculating your carbon emissions based on the food you eat.
                  Machine learning provides systems the ability to automatically
                  learn and improve from experience without being explicitly
                  programmed. We use machine learning to identify the foods you
                  consume and determine the amount of carbon emitted.
                </Typography>
              </div>
            </div>
          </Container>

          <Typography
            variant="h4"
            align="center"
            color="secondary"
            style={{ marginBottom: "50px", marginTop: "100px" }}
          >
            <strong>About Us</strong>
          </Typography>
          <div className={classes.aboutUs}>
            <Container>
              <Grid container>
                <Grid item md={6} className={classes.aboutUsBox}>
                  <img
                    src={wobin}
                    style={{
                      marginRight: "20px",
                      width: "135px",
                      height: "135px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    className={classes.aboutUsProfile}
                  >
                    <strong>Wo Bin Chen</strong> <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent arcu est, lobortis quis quam in, tristique sagittis
                    elit. Nam elementum pulvinar efficitur. Aliquam erat
                    volutpat. Mauris efficitur, tellus et vehicula sodales, quam
                    turpis ultricies ligula,
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.aboutUsBox}>
                  <img
                    src={calvin}
                    style={{
                      marginRight: "20px",
                      width: "135px",
                      height: "135px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    className={classes.aboutUsProfile}
                  >
                    <strong>Calvin Chen</strong> <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent arcu est, lobortis quis quam in, tristique sagittis
                    elit. Nam elementum pulvinar efficitur. Aliquam erat
                    volutpat. Mauris efficitur, tellus et vehicula sodales, quam
                    turpis ultricies ligula,
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.aboutUsBox}>
                  <img
                    src={rio}
                    style={{
                      marginRight: "20px",
                      width: "135px",
                      height: "135px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    className={classes.aboutUsProfile}
                  >
                    <strong>Rio Ishii</strong> <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent arcu est, lobortis quis quam in, tristique sagittis
                    elit. Nam elementum pulvinar efficitur. Aliquam erat
                    volutpat. Mauris efficitur, tellus et vehicula sodales, quam
                    turpis ultricies ligula,
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.aboutUsBox}>
                  <img
                    src={ray}
                    style={{
                      marginRight: "20px",
                      width: "135px",
                      height: "135px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    className={classes.aboutUsProfile}
                  >
                    <strong>Ray Zhang</strong> <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent arcu est, lobortis quis quam in, tristique sagittis
                    elit. Nam elementum pulvinar efficitur. Aliquam erat
                    volutpat. Mauris efficitur, tellus et vehicula sodales, quam
                    turpis ultricies ligula,
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
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
