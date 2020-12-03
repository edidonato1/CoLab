import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faUser, faPalette, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import LayoutStyled from '../stylesheets/Layout'

export default function Header() {

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="nav-logo"> C o L <FontAwesomeIcon icon={faFlask} /> b </Link>
      </div>
      <nav>
        <div className="icon-box">
          <Link to="/media" className="nav-icon"><FontAwesomeIcon icon={faPalette} /></Link>
        </div>
        <div className="icon-box">
          <Link to="/" className="nav-icon"><FontAwesomeIcon icon={faHome} /></Link>
        </div>
        <div className="icon-box">
          <Link to="/profile" className="nav-icon"><FontAwesomeIcon icon={faUser} /></Link>
        </div>
      </nav>

    </div>
  )
}