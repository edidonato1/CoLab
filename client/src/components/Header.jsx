import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faUser, faPalette, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import LayoutStyled from '../stylesheets/Layout'

export default function Header() {

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="icon"> C o L <FontAwesomeIcon icon={faFlask} /> b </Link>
      </div>
      <nav>
        <Link to="/media" className="icon"><FontAwesomeIcon icon={faPalette} /></Link>
        <Link to="/profile" className="icon"><FontAwesomeIcon icon={faUser} /></Link>
        <Link to="/" className="icon"><FontAwesomeIcon icon={faHome} /></Link>
      </nav>

    </div>
  )
}