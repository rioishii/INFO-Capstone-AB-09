import React from "react"
import whyus1 from "../../images/whyus1.png"
import whyus2 from "../../images/whyus2.png"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  whyus: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(12),
  },
  whyusBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(8),
  },
  whyusImg: {
    marginRight: theme.spacing(6),
    width: "150px",
    height: "100%",
  },
  whyusBodyText: {
    fontWeight: "100",
    fontSize: "22px",
    letterSpacing: "1px",
    lineHeight: "30px"
  },
}))

const Whyus = () => {
  const classes = useStyles()
  return (
    <section id="whyus">
      <Container className={classes.whyus}>
        <Typography
          variant="h1"
          align="center"
          color="secondary"
          style={{ marginBottom: "35px" }}
        >
          <strong>Why Us?</strong>
        </Typography>
        <div className={classes.whyusBox}>
          <img className={classes.whyusImg} src={whyus1} alt="whyusicon1" />
          <div className={classes.whyusText}>
            <Typography variant="h3" color="textPrimary" gutterBottom>
              <strong>You Can Make a Difference</strong>
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.whyusBodyText}
            >
              Food is one of the largest contributors to climate change. You can
              use our application to make a difference in the world by becoming
              more aware of your food choices.
            </Typography>
          </div>
        </div>

        <div className={classes.whyusBox}>
          <img className={classes.whyusImg} src={whyus2} alt="whyusicon2" />
          <div className={classes.whyusText}>
            <Typography variant="h3" color="textPrimary" gutterBottom>
              <strong>Machine Learning</strong>
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
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
    </section>
  )
}

export default Whyus
