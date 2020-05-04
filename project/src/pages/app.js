import React from "react"
import { Router } from "@reach/router"
import Login from "../views/login"
import Signup from "../views/signup"
import Dashboard from "../views/dashboard"
import PrivateRoute from "../components/PrivateRoute"
import { ThemeProvider } from '@material-ui/styles';
import theme from '../themes';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
    </Router>
  </ThemeProvider>
)

export default App
