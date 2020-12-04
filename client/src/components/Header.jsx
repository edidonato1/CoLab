import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faUser, faPalette, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import LayoutStyled from '../stylesheets/Layout'

export default function Header() {

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="nav-logo"> C o L <FontAwesomeIcon icon={faFlask} /> b </Link>
      </div>
      <nav>
        <div className="icon-box">
          <NavLink
            to="/media"
            className="nav-icon"
            activeStyle={{
              fontSize: "33px",
              color: "#F9EAE7"
            }}><FontAwesomeIcon icon={faPalette} /></NavLink>
        </div>
        <div className="icon-box">
          <NavLink
            exact to="/"
            className="nav-icon"
            activeStyle={{
              fontSize: "33px",
              color: "#F9EAE7"
            }}><FontAwesomeIcon icon={faHome} /></NavLink>
        </div>
        <div className="icon-box">
          <NavLink
            to="/profile"
            className="nav-icon"
            activeStyle={{
              fontSize: "33px",
              color: "#F9EAE7"
            }}><FontAwesomeIcon icon={faUser} /></NavLink>
        </div>
      </nav>

    </div>
  )
}