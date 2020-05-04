import React from "react"
import theme from "../themes"
import CssBaseline from "@material-ui/core/CssBaseline"
import UserNavbar from "../components/UserNavbar"
import { Auth } from "aws-amplify"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"

export default function Welcome() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <UserNavbar />
    </MuiThemeProvider>
  )
}
