import React from "react"
import logo from "../../images/logo.png"
import AppBar from "@material-ui/core/AppBar"
import Link from "@material-ui/core/Link"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
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
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
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
          <Link href="/login" color="textPrimary" className={classes.link}>
            Log In
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
