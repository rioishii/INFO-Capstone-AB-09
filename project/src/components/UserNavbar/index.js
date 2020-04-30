import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Logo from "../Logo"
import { navigate } from "@reach/router"
import Toolbar from "@material-ui/core/Toolbar"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Container from "@material-ui/core/Container"
import IconButton from "@material-ui/core/IconButton"
import AccountCircle from "@material-ui/icons/AccountCircle"
import { getCurrentUser } from "../../utility/Auth"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import { Auth } from "aws-amplify"
import { logout } from '../../utility/Auth'

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

  const user = getCurrentUser()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSignout = e => {
      e.preventDefault()
      Auth.signOut()
        .then(logout(() => navigate('/app/login')))
        .catch(err => console.log('error: ', err))
  }

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Logo text="Greenergy" />
          <div className={classes.toolbarLinks} />
          <Typography color="textSecondary" variant="body1" style={{fontSize: "24px"}}>
              Welcome
          </Typography>
          <Typography variant="body1" style={{fontSize: "24px"}}>
              <strong>, {user.name}</strong>
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleSignout}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
