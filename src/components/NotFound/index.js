import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img className="not-found-container" alt="not found" src="" />
    <h1>Page Not Found</h1>
    <Link to="/">
      <button type="button">Go Home</button>
    </Link>
  </div>
)
export default NotFound
