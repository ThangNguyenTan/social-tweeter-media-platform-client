import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserNav } from "../UserNav";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/" className="navbar__nav-link">
            <img className="img-fluid" src="/assets/tweeter.svg" alt="Logo" />
          </Link>
        </div>
        <div className="navbar__nav">
          <div className="navbar__nav-list">
            <NavLink
              exact
              to="/"
              className="navbar__nav-item"
              activeClassName="active"
            >
              <Link to="/" className="navbar__nav-link">
                Home
              </Link>
            </NavLink>
            <NavLink
              exact
              to="/explore"
              className="navbar__nav-item"
              activeClassName="active"
            >
              <Link to="/explore" className="navbar__nav-link">
                Explore
              </Link>
            </NavLink>
            <NavLink
              exact
              to="/bookmark"
              className="navbar__nav-item"
              activeClassName="active"
            >
              <Link to="/bookmark" className="navbar__nav-link">
                Bookmark
              </Link>
            </NavLink>
          </div>
        </div>
        <div className="navbar__user">
          <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
