import React from "react"
import feature1 from "../../images/feature1.png"
import feature2 from "../../images/feature2.png"
import feature3 from "../../images/feature3.png"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import CardMedia from "@material-ui/core/CardMedia"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  features: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(12),
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
}))

const Features = () => {
  const classes = useStyles()

  return (
    <section id="features">
      <Container className={classes.features} maxWidth="lg">
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
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequu
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
                  <strong>Compare your carbon footprint to other peers</strong>
                </Typography>
                <Typography>
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequu
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
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequu
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Features
