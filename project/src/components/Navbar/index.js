import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link as SLink } from "react-scroll"
import Logo from "../Logo"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  appbar: {
    background: "#fafafa",
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  },
  toolbar: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  toolbarLinks: {
    flex: 1,
    marginLeft: theme.spacing(4),
  },
  link: {
    color: "#49535B",
    textDecoration: "none",
    "&:hover, &:focus": {
      textDecoration: "underline",
      textDecorationColor: "#8ED73D",
    },
    fontSize: "1.2rem",
    padding: theme.spacing(4),
  },
  loginButton: {
    marginRight: theme.spacing(3),
  },
  signupLink: {
    color: "#fff",
    textDecoration: "none",
  },
  loginLink: {
    color: "#49535B",
    textDecoration: "none",
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Logo text="Greenergy" />
          <div className={classes.toolbarLinks}>
            <SLink
              className={classes.link}
              to="hero"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Home
            </SLink>
            <SLink
              className={classes.link}
              to="features"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}
            >
              Features
            </SLink>
            <SLink
              className={classes.link}
              to="whyus"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}
            >
              Why Us?
            </SLink>
            <SLink
              className={classes.link}
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-125}
              duration={500}
            >
              About Us
            </SLink>
          </div>
          <Button
            size="large"
            variant="outlined"
            className={classes.loginButton}
          >
            <Link to="/app/login" className={classes.loginLink}>
              Login
            </Link>
          </Button>
          <Button color="primary" variant="contained" size="large">
            <Link to="/app/signup" className={classes.signupLink}>
              Sign up
            </Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
