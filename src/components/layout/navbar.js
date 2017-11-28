import React from 'react';
import styled from 'styled-components';

export default function Navbar(props) {
  const loggedIn = true;

  const navbarEnd = loggedIn ? (
    <div className="navbar-end">
      <a className="navbar-item" href="#">Settings</a>
      <a className="navbar-item" href="#">Logout</a>
    </div>
  ) : (
    <div className="navbar-end">
      <a className="navbar-item" href="#">Login</a>
      <a className="navbar-item" href="#">Create Account</a>
    </div>
  );

  return (
    <nav className="navbar is-transparent">
      <div className="container">

        <div className="navbar-brand">
          <LogoLink className="navbar-item" href="#">
            <i className="fa fa-free-code-camp" aria-hidden="true"/>
            reTickets
          </LogoLink>
          <div className="navbar-burger burger" data-target="navbar-main-menu">
            <span/>
            <span/>
            <span/>
          </div>
        </div>

        <div id="navbar-main-menu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#">Home</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#">Accommodations</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="#">Manage</a>
                <a className="navbar-item" href="#">Edit Spots</a>
              </div>
            </div>
          </div>
        </div>

        {navbarEnd}

      </div>
    </nav>
  );
}

const LogoLink = styled.a`
  font-size: 30px;
  & > i {
    margin-right: 15px;
  }
`;
