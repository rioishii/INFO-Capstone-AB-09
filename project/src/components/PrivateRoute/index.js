import React from "react"
import { navigate } from "@reach/router"
import { isLoggedIn } from "../../utility/Auth"
import Main from "../../layouts"

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, location, ...rest } = this.props
    if (!isLoggedIn()) {
      navigate("/app/login")
      return null
    }
    return (
      <Main>
        <Component {...rest} />
      </Main>
    )
  }
}

export default PrivateRoute
