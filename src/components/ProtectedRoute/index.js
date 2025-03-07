// eslint-disable-next-line import/no-unresolved
import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (!jwtToken) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
