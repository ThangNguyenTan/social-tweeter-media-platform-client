import React from "react";

import "./post-item.css";
import {
  faBookmark,
  faComment,
  faHeart,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostItem = () => {
  return (
    <div className="box-item post-item">
      <div className="post-item__header">
        <div className="post-item__header__image">
          <img src="/assets/profile.jpg" className="img-fluid" alt="" />
        </div>
        <div className="post-item__header__info">
          <h4>Mikael Stanley</h4>
          <p>24 August at 20:43</p>
        </div>
      </div>
      <div className="post-item__tweet">
        <p>
          “We travel, some of us forever, to seek other places, other lives,
          other souls.” – Anais Nin
        </p>
        <div className="post-item__tweet__image">
          <img src="/assets/profile.jpg" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="post-item__meta">
        <p>449 Comments</p>
        <p>59k Retweets</p>
        <p>234 Saved</p>
      </div>
      <div className="post-item__interactions">
        <div className="interactions__item interactions-item interactions-item-comment">
          <div className="interactions__item__icon">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="interactions__item__text">Comment</div>
        </div>
        <div className="interactions__item interactions-item interactions-item-retweet active">
          <div className="interactions__item__icon">
            <FontAwesomeIcon icon={faRecycle} />
          </div>
          <div className="interactions__item__text">Retweet</div>
        </div>
        <div className="interactions__item interactions-item interactions-item-like active">
          <div className="interactions__item__icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="interactions__item__text">Like</div>
        </div>
        <div className="interactions__item interactions-item interactions-item-save active">
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
      <div className="post-item__comment-list">
        <div className="comment-item">
          <div className="comment-item__profile-image">
            <img src="/assets/profile.jpg" className="img-fluid" alt="" />
          </div>
          <div className="comment-item__container">
            <div className="comment-item__inner-container">
              <div className="comment-item__header">
                <h4>Waqar Bloom</h4>
                <p>24 August at 20:43</p>
              </div>
              <div className="comment-item__content">
                <p>
                  I’ve seen awe-inspiring things that I thought I’d never be
                  able to explain to another person.
                </p>
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
      </div>
    </div>
  );
};

export default PostItem;
