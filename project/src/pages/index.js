import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landingpage from '../pages/landingpage';
import Login from '../pages/login';
import Signup from '../pages/signup';
import { Auth } from 'aws-amplify';

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated })
  }

  setUser = user => {
    this.setState({ user: user })
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession()
      this.setAuthStatus(true)
      console.log(session)
      const user = await Auth.currentAuthenticatedUser()
      this.setUser(user)
    } catch (error) {
      if (error !== "No current user") {
        console.log(error)
      }
    }

    this.setState({ isAuthenticating: false })
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    }
    return (
      !this.state.isAuthenticating && (
        <div className="App">
          <Router>
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <Landingpage {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/login"
                  render={props => <Login {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/signup"
                  render={props => <Signup {...props} auth={authProps} />}
                />
              </Switch>
            </div>
          </Router>
        </div>
      )
    )
  }
}

export default App
