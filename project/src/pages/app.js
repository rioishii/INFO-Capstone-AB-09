import React from "react"
import { Router } from "@reach/router"
import Login from "../views/login"
import Signup from "../views/signup"
import Dashboard from "../views/dashboard"
import PrivateRoute from "../components/PrivateRoute"
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from '../themes';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
    </Router>
  </MuiThemeProvider>
)

export default App
