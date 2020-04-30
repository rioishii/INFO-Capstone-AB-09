import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Logo from "../Logo"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  toolbar: {
    marginTop: theme.spacing(2),
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
    fontSize: "1.4rem",
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
    <Container>
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <Logo text="Greenergy" />
          <div className={classes.toolbarLinks}>
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
      </React.Fragment>
    </Container>
  )
}
