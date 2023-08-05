import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./follow-suggestion-box.css";

const FollowSuggestionBox = () => {
  return (
    <div className="box-item">
      <div className="box-item__container">
        <div className="box-item__header">
          <h4>Who to follow</h4>
        </div>
        <div className="box-item__content">
          <div className="follow-list">
            <div className="follow-item">
              <div className="follow-item__header">
                <div className="follow-item-header__profile-image">
                  <img src="/assets/profile.jpg" className="img-fluid" alt="" />
                </div>
                <div className="follow-item-header__meta">
                  <h4>Mikael Stanley</h4>
                  <p>230k followers</p>
                </div>
                <div className="follow-item-header__action">
                  <button className="btn btn-primary btn-block">
                    <FontAwesomeIcon icon={faUserPlus} className="icon" />
                    Follow
                  </button>
                </div>
              </div>
              <div className="follow-item__content">
                <p>
                  Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
                </p>
              </div>
              <div className="follow-item__bg-image">
                <img src="/assets/mock-bg.jpg" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="follow-item">
              <div className="follow-item__header">
                <div className="follow-item-header__profile-image">
                  <img src="/assets/profile.jpg" className="img-fluid" alt="" />
                </div>
                <div className="follow-item-header__meta">
                  <h4>Mikael Stanley</h4>
                  <p>230k followers</p>
                </div>
                <div className="follow-item-header__action">
                  <button className="btn btn-primary btn-block">
                    <FontAwesomeIcon icon={faUserPlus} className="icon" />
                    Follow
                  </button>
                </div>
              </div>
              <div className="follow-item__content">
                <p>
                  Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
                </p>
              </div>
              <div className="follow-item__bg-image">
                <img src="/assets/mock-bg.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowSuggestionBox;
