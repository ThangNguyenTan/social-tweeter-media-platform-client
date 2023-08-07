import React, { useState } from "react";
import {
  faCaretDown,
  faCog,
  faSignOut,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./user-nav.css";
import { Link } from "react-router-dom";

const UserNav = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  return (
    <div className="user-nav">
      <div
        className="user-nav__container"
        onClick={() => setIsOptionOpen((prev) => !prev)}
      >
        <div className="user-nav__profile-image">
          <img src="/assets/profile.jpg" className="img-fluid" alt="" />
        </div>
        <div className="user-nav__name">
          <p>Xanthe Neal</p>
        </div>
        <div className="user-nav__icon">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      {isOptionOpen && (
        <div className="user-nav__option box-item">
          <div className="user-nav__option-container">
            <div className="user-nav__option-list">
              <div
                className="user-nav__option-item"
                onClick={() => setIsOptionOpen((prev) => !prev)}
              >
                <Link to="/profile" className="user-nav__option-link">
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserCircle} />
                  </div>
                  <div className="text">
                    <p>My Profile</p>
                  </div>
                </Link>
              </div>
              <div
                className="user-nav__option-item"
                onClick={() => setIsOptionOpen((prev) => !prev)}
              >
                <Link to="/settings" className="user-nav__option-link">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCog} />
                  </div>
                  <div className="text">
                    <p>Settings</p>
                  </div>
                </Link>
              </div>
              <hr />
              <div
                className="user-nav__option-item"
                onClick={() => setIsOptionOpen((prev) => !prev)}
              >
                <Link to="/logout" className="user-nav__option-link logout">
                  <div className="icon">
                    <FontAwesomeIcon icon={faSignOut} />
                  </div>
                  <div className="text">
                    <p>Logout</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNav;
