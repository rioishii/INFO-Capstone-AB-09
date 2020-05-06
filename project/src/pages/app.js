import React from "react"
import { Router } from "@reach/router"
import Login from "../views/Login"
import Signup from "../views/Signup"
import Dashboard from "../views/Dashboard"
import Upload from "../views/Upload"
import Charts from "../views/Charts"
import PrivateRoute from "../components/PrivateRoute"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { Chart } from "react-chartjs-2"
import "react-perfect-scrollbar/dist/css/styles.css"
import '../assets/scss/index.scss'
import validate from 'validate.js';
import validators from '../utility/validators'
import chartjs from "../utility/chartjs"
import theme from "../themes"

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw,
})

validate.validators = {
  ...validate.validators,
  ...validators,
}

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
