// import React, { Component } from "react"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Landingpage from "../pages/landingpage"
// import Login from "../pages/login"
// import Signup from "../pages/signup"
// import Dashboard from "../pages/dashboard"
// import { Auth } from "aws-amplify"

// class App extends Component {
//   state = {
//     isAuthenticated: false,
//     isAuthenticating: true,
//     user: null,
//   }

//   setAuthStatus = authenticated => {
//     this.setState({ isAuthenticated: authenticated })
//   }

//   setUser = user => {
//     this.setState({ user: user })
//   }

//   async componentDidMount() {
//     try {
//       const session = await Auth.currentSession()
//       this.setAuthStatus(true)
//       console.log(session)
//       const user = await Auth.currentAuthenticatedUser()
//       this.setUser(user)
//     } catch (error) {
//       if (error !== "No current user") {
//         console.log(error)
//       }
//     }

//     this.setState({ isAuthenticating: false })
//   }

//   render() {
//     const authProps = {
//       isAuthenticated: this.state.isAuthenticated,
//       user: this.state.user,
//       setAuthStatus: this.setAuthStatus,
//       setUser: this.setUser,
//     }
//     return (
//       !this.state.isAuthenticating && (
//         <div className="App">
//           <Router>
//             <div>
//               <Switch>
//                 <Route
//                   exact
//                   path="/"
//                   render={props => <Landingpage {...props} auth={authProps} />}
//                 />
//                 <Route
//                   exact
//                   path="/signup"
//                   render={props => <Signup {...props} auth={authProps} />}
//                 />
//                 <Route
//                   exact
//                   path="/login"
//                   render={props => <Login {...props} auth={authProps} />}
//                 />
//                 <Route
//                   exact
//                   path="/dashboard"
//                   render={props => <Dashboard {...props} auth={authProps} />}
//                 />
//               </Switch>
//             </div>
//           </Router>
//         </div>
//       )
//     )
//   }
// }

// export default App

import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landingpage from "../pages/landingpage"
import Login from "../pages/login"
import Signup from "../pages/signup"
import Dashboard from "../pages/dashboard"

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,

        user: {
          email: action.payload.username,
        }
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landingpage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
