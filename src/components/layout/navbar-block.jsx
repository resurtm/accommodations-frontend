import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function NavbarBlock(props) {
  return (
    <nav className="navbar is-transparent">
      <div className="container">

        <div className="navbar-brand">
          <LogoLink to="/" className="navbar-item" href="#">
            <i className="fa fa-free-code-camp" aria-hidden="true"/>
          </LogoLink>
          <div className="navbar-burger burger" data-target="navbar-main-menu">
            <span/>
            <span/>
            <span/>
          </div>
        </div>

        <div id="navbar-main-menu" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#" onClick={e => e.preventDefault()}>Accommodations</a>
              <div className="navbar-dropdown is-boxed">
                <Link to="/accommodations" className="navbar-item">Manage</Link>
                <Link to="/spots" className="navbar-item">Edit Spots</Link>
              </div>
            </div>
          </div>
        </div>

        {props.loggedIn ?
          <div className="navbar-end">
            <a className="navbar-item" href="#">{props.email}</a>
            <a className="navbar-item" onClick={() => props.onLogoutClick()}>Logout</a>
          </div>
        :
          <div className="navbar-end">
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/register" className="navbar-item">Create Account</Link>
          </div>
        }

      </div>
    </nav>
  );
}

NavbarBlock.propTypes = {
  email: PropTypes.string,
  loggedIn: PropTypes.bool,
  onLogoutClick: PropTypes.func,
};

NavbarBlock.defaultProps = {
  email: null,
  loggedIn: false,
  onLogoutClick: () => {},
};

const LogoLink = styled(Link)`
  font-size: 30px;
`;
