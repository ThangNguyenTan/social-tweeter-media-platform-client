import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatDate } from "../../../../utils";

import "./comment.css";

const Comment = ({ commentItem }) => {
  const { comment, createdAt, user } = commentItem;
  const { username, profileImageURL } = user;
  return (
    <div className="comment-item">
      <div className="comment-item__profile-image">
        <img src={profileImageURL} className="img-fluid" alt="" />
      </div>
      <div className="comment-item__container">
        <div className="comment-item__inner-container">
          <div className="comment-item__header">
            <h4>{username}</h4>
            <p>{formatDate(createdAt)}</p>
          </div>
          <div className="comment-item__content">
            <p>{comment}</p>
          </div>
        </div>
        <div className="comment-item__meta">
          <div className="comment-item__like">
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="text">
              <p>Like</p>
            </div>
          </div>
          <p>12k Likes</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
