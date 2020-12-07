import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faUser, faPalette, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const DropDown = styled.div`
  border-top: 2px solid #E36562;
  display: flex;
  position: absolute;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 60px;
  right: 0px;
  width: 120px;
  transition: .2s;
  background: #092741;
  transition-timing-function: linear;
  color: #F1F0F0;

  li:hover {
    color: #E36562;
  }
  ul {
    padding-left: 20px;
    line-height: 30px;
  }

  @media screen and (max-width: 600px) {
    top: initial;
    bottom: 60px;
    border-top: none;
    border-bottom: 2px solid #E36562;
  }
`

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const { loggedInUser } = props;
  const activeLinkStyles = {
    fontSize: "33px",
    color: "#F9EAE7"
  }


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
            activeStyle={activeLinkStyles}><FontAwesomeIcon icon={faPalette} /></NavLink>
        </div>
        <div className="icon-box">
          <NavLink
            exact to="/"
            className="nav-icon"
            activeStyle={activeLinkStyles}><FontAwesomeIcon icon={faHome} /></NavLink>
        </div>

        {loggedInUser ?
          <div className="icon-box">
            <NavLink
              to="/profile"
              className="nav-icon"
              activeStyle={activeLinkStyles}><FontAwesomeIcon icon={faUser} /></NavLink>
          </div>
          :
          <>
            <div className="icon-box">
              <div className="nav-icon" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <DropDown open={open}>
              <ul>
                <li onClick={() => setOpen(!open)}><Link to="/login">log in</Link></li>
                <li onClick={() => setOpen(!open)}><Link to="/register">register</Link></li>
              </ul>
            </DropDown>
          </>}
        
      </nav>

    </div>
  )
}