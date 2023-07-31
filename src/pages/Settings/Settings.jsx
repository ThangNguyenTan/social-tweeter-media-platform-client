import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import "./settings.css";
import { getMyProfile } from "../../apis/profile";
import useAuthToken from "../../hooks/useAuthToken";
import { toast } from "react-toastify";
import { ErrorDisplayer } from "../../components";

const Settings = () => {
  useAuthToken();
  const { isLoading, isError, data, error } = useQuery(
    "myProfile",
    getMyProfile
  );

  if (isLoading) {
    return null;
  }

  if (isError) {
    toast.error(error.message, {
      toastId: "success1",
    });
    return <ErrorDisplayer errorMessage={error.message} />;
  }

  const {
    user: { username, bio, email, profileImageURL },
  } = data;

  return (
    <div id="settings-page">
      <div className="settings-page__content">
        <div className="settings__header">
          <h1 className="settings__header__title">Personal info</h1>
          <p className="settings__header__description">
            Basic info, like your name and photo
          </p>
        </div>
        <div className="settings__content">
          <div className="settings__content__header">
            <div className="left">
              <h4>Profile</h4>
              <p>Some info may be visible to other people</p>
            </div>
            <div className="right">
              <Link className="btn btn-edit" to="/settings/update">
                Edit
              </Link>
            </div>
          </div>
          <div className="settings__content__profile-list">
            <div className="settings__content__profile-item">
              <div className="left">
                <h5>PHOTO</h5>
              </div>
              <div className="right">
                <div className="right__image-container">
                  <img className="img-fluid" src={profileImageURL} alt="Logo" />
                </div>
              </div>
            </div>
            <div className="settings__content__profile-item">
              <div className="left">
                <h5>NAME</h5>
              </div>
              <div className="right">{username}</div>
            </div>
            <div className="settings__content__profile-item">
              <div className="left">
                <h5>BIO</h5>
              </div>
              <div className="right">{bio}</div>
            </div>
            <div className="settings__content__profile-item">
              <div className="left">
                <h5>EMAIL</h5>
              </div>
              <div className="right">{email}</div>
            </div>
            <div className="settings__content__profile-item">
              <div className="left">
                <h5>PASSWORD</h5>
              </div>
              <div className="right">**********************</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
