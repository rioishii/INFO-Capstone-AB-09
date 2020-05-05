import React from "react"
import { Router } from "@reach/router"
import Login from "../views/login"
import Signup from "../views/signup"
import Dashboard from "../views/dashboard"
import Upload from "../views/upload"
import Charts from "../views/charts"
import PrivateRoute from "../components/PrivateRoute"
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from '../themes';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/upload" component={Upload} />
      <PrivateRoute path="/app/charts" component={Charts} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
    </Router>
  </MuiThemeProvider>
)

export default App
