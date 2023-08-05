import React from "react";

import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FollowSuggestionBox, PostItem, TrendBox } from "../../components";

const Profile = () => {
  return (
    <div id="profile-page">
      <div
        className="profile-page__hero"
        style={{ backgroundImage: `url("/assets/mock-bg.jpg")` }}
      ></div>
      <div className="profile-page__header box-item">
        <div className="profile-page-header__image">
          <img src="/assets/profile.jpg" className="img-fluid" alt="" />
        </div>
        <div className="profile-page-header__meta">
          <div className="header-meta__top">
            <h4>Daniel Jensen</h4>
            <p>
              <b>2,569 </b> Following
            </p>
            <p>
              <b>10.8K</b> Followers
            </p>
          </div>
          <div className="header-meta__bottom">
            <p>Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰</p>
          </div>
        </div>
        <div className="profile-page-header__action">
          <button className="btn btn-primary btn-block">
            <FontAwesomeIcon icon={faUserPlus} className="icon" />
            Follow
          </button>
        </div>
      </div>
      <div className="profile-page__container">
        <div className="left">
          <PostItem />
          <PostItem />
        </div>
        <div className="right">
          <TrendBox />
          <FollowSuggestionBox />
        </div>
      </div>
    </div>
  );
};

export default Profile;
