/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import Amplify, { Auth } from 'aws-amplify'
// import awsConfig from './src/aws-exports'
// Amplify.configure(awsConfig)
import Amplify, { Auth } from 'aws-amplify'
import awsConfig from './src/aws-exports'
import { setUser } from './src/utility/Auth'
import "tailwindcss/dist/base.css";

Amplify.configure(awsConfig)

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const userInfo = {
        ...user.attributes,
        username: user.username
      }
      setUser(userInfo)
    })
    .catch(err => {
      window.localStorage.setItem('gatsbyUser', null)
    })
}