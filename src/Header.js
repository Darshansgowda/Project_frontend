import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('usertoken')
    window.location = '/';
  }
  render() {
    const loginRegLink = (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar">
          <div class="container">
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li><Link to="./register" class="nav-link">Signup
                  </Link></li>
                <li><Link to="/login" class="nav-link">Signin
                </Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
    const logoutLink = (
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar">
      </nav>
    )

    return (
      <div>

        {localStorage.getItem('usertoken') ? logoutLink : loginRegLink}

      </div>
    )
  }
}

export default Header;