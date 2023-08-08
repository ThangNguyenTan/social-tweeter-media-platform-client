import React from "react";
import {
  faBookmark,
  faComment,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatDate } from "../../utils";
import { Comment, LikeButton } from "./components";

import "./post-item.css";

const PostItem = ({ post }) => {
  const {
    user,
    createdAt,
    content,
    imageURL,
    bookmarks,
    comments,
    retweets,
    userLikedId: postUserLikedId,
    _id: currentPostId,
  } = post;
  const { profileImageURL, username } = user;

  const renderComments = () => {
    return comments.map((comment) => (
      <Comment key={comment._id} commentItem={comment} />
    ));
  };

  return (
    <div className="box-item post-item">
      <div className="post-item__header">
        <div className="post-item__header__image">
          <img src={profileImageURL} className="img-fluid" alt="" />
        </div>
        <div className="post-item__header__info">
          <h4>{username}</h4>
          <p>{formatDate(createdAt)}</p>
        </div>
      </div>
      <div className="post-item__tweet">
        <p>{content}</p>
        <div className="post-item__tweet__image">
          <img src={imageURL} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="post-item__meta">
        <p>{comments.length} Comments</p>
        <p>{retweets.length} Retweets</p>
        <p>{bookmarks.length} Saved</p>
      </div>
      <div className="post-item__interactions">
        <div className="interactions__item interactions-item interactions-item-comment">
          <div className="interactions__item__icon">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="interactions__item__text">Comment</div>
        </div>
        <div className="interactions__item interactions-item interactions-item-retweet">
          <div className="interactions__item__icon">
            <FontAwesomeIcon icon={faRecycle} />
          </div>
          <div className="interactions__item__text">Retweet</div>
        </div>
        <LikeButton
          postUserLikedId={postUserLikedId}
          currentPostId={currentPostId}
        />
        <div
          className={`interactions__item interactions-item interactions-item-save`}
        >
          <div className="interactions__item__icon">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <div className="interactions__item__text">Save</div>
        </div>
      </div>
      <div className="post-item__comment-form">
        <div className="comment-form__profile-image">
          <img src="/assets/profile.jpg" className="img-fluid" alt="" />
        </div>
        <div className="comment-form__container">
          <input
            type="text"
            className="form-control"
            placeholder="Tweet your reply"
          />
        </div>
      </div>
      <div className="post-item__comment-list">{renderComments()}</div>
    </div>
  );
};

export default PostItem;
