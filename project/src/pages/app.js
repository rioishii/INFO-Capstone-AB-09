import React from "react"
import { Router } from "@reach/router"
import Login from "../components/login"
import Signup from "../components/signup"
import Dashboard from "../components/dashboard"
import PrivateRoute from "../components/PrivateRoute"

const App = () => (
  <Router>
    <PrivateRoute path="/app/dashboard" component={Dashboard} />
    <Login path="/app/login" />
    <Signup path="/app/signup" />
  </Router>
)

export default App
