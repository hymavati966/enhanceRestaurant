import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
// eslint-disable-next-line import/no-unresolved
import Cookies from 'js-cookie'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const {cartList, restaurantName} = useContext(CartContext)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <Link to="/cart">
        <button type="button" className="cart-icon-button">
          <AiOutlineShoppingCart className="cart-icon" />
        </button>
      </Link>
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="m-0 cart-count">{cartList.length}</p>
      </div>
    </div>
  )

  return (
    <nav className="nav-container">
      <Link to="/">
        <h1 className="m-0 logo-heading">{restaurantName}</h1>
      </Link>
      <div className="cart-container">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My Orders
        </p>
        <button
          type="button"
          className="btn btn-outline-danger ms-2 me-2"
          onClick={onLogout}
        >
          Logout
        </button>
        {renderCartIcon()}
      </div>
    </nav>
  )
}
export default withRouter(Header)
