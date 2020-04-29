import React from "react"
import Logo from '../Logo'
import AppBar from "@material-ui/core/AppBar"
import { Link } from "gatsby"
import Toolbar from "@material-ui/core/Toolbar"
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
    color: "#49535B",
    textDecoration: "none",
    "&:hover, &:focus": {
      textDecoration: "underline",
      textDecorationColor: "#8ED73D"
    },
    marginLeft: theme.spacing(8),
    fontSize: "1.4rem",
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Logo text="Greenergy" />
        <nav>
          <Link to="#" className={classes.link}>
            Home
          </Link>
          <Link to="#" className={classes.link}>
            Features
          </Link>
          <Link to="#" className={classes.link}>
            Why Us?
          </Link>
          <Link to="#" className={classes.link}>
            About Us
          </Link>
          <Link to="/app/login" className={classes.link} >Log In</Link>
          <Link to="/app/signup" className={classes.link} >Sign Up</Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
