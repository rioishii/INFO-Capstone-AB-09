import React from "react"
import { navigate } from "@reach/router"
import clsx from "clsx"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import {
  AppBar,
  Container,
  Toolbar,
  Hidden,
  IconButton,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import InputIcon from "@material-ui/icons/Input"
import Logo from "../../../components/Logo"
import { Auth } from "aws-amplify"
import { logout } from '../../../utility/Auth'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    background: "#fff",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  flexGrow: {
    flexGrow: 1,
  },
}))

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props

  const classes = useStyles()

  const handleSignout = e => {
    e.preventDefault()
    Auth.signOut()
      .then(logout(() => navigate("/app/login")))
      .catch(err => console.log("error: ", err))
  }

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Logo text="Greenergy" />
          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <IconButton color="primary" onClick={handleSignout}>
              <InputIcon fontSize="large" />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton color="primary" onClick={onSidebarOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
}

export default Topbar
