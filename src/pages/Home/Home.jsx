import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRecycle,
  faHeart,
  faBookmark,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./home.css";

const CreateTweetSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const Home = () => {
  return (
    <div id="home-page">
      <div className="home-page__container">
        <div className="left">
          <div className="create-tweet box-item">
            <div className="create-tweet__container box-item__container">
              <div className="create-tweet__header box-item__header">
                <h4>Tweet something</h4>
              </div>
              <div className="create-tweet__content box-item__content">
                <div className="create-tweet__profile-image left">
                  <img src="/assets/profile.jpg" className="img-fluid" alt="" />
                </div>
                <div className="create-tweet__form right">
                  <Formik
                    initialValues={{
                      content: "",
                    }}
                    validationSchema={CreateTweetSchema}
                    onSubmit={async (values) => {
                      console.log(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="form">
                        <Field
                          name="content"
                          type="text"
                          className="form-control"
                          placeholder="What’s happening?"
                        />
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="create-tweet__footer box-item__footer">
                <div className="left"></div>
                <div className="right">
                  <button className="btn btn-primary">Tweet</button>
                </div>
              </div>
            </div>
          </div>
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
                “We travel, some of us forever, to seek other places, other
                lives, other souls.” – Anais Nin
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
                        I’ve seen awe-inspiring things that I thought I’d never
                        be able to explain to another person.
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
                “We travel, some of us forever, to seek other places, other
                lives, other souls.” – Anais Nin
              </p>
              <div className="post-item__tweet__image"></div>
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
              <div className="interactions__item interactions-item interactions-item-retweet">
                <div className="interactions__item__icon">
                  <FontAwesomeIcon icon={faRecycle} />
                </div>
                <div className="interactions__item__text">Retweet</div>
              </div>
              <div className="interactions__item interactions-item interactions-item-like">
                <div className="interactions__item__icon">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="interactions__item__text">Like</div>
              </div>
              <div className="interactions__item interactions-item interactions-item-save">
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
          </div>
        </div>
        <div className="right">
          <div className="box-item">
            <div className="box-item__container">
              <div className="box-item__header">
                <h4>Trends for you</h4>
              </div>
              <div className="box-item__content">
                <div className="trend-list">
                  <div className="trend-item">
                    <h5>#programming</h5>
                    <p>213k Tweets</p>
                  </div>
                  <div className="trend-item">
                    <h5>#devchallenges</h5>
                    <p>213k Tweets</p>
                  </div>
                  <div className="trend-item">
                    <h5>#frontend</h5>
                    <p>213k Tweets</p>
                  </div>
                  <div className="trend-item">
                    <h5>#helsinki</h5>
                    <p>213k Tweets</p>
                  </div>
                  <div className="trend-item">
                    <h5>#100DaysOfCode</h5>
                    <p>213k Tweets</p>
                  </div>
                  <div className="trend-item">
                    <h5>#learntocode</h5>
                    <p>213k Tweets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                        <img
                          src="/assets/profile.jpg"
                          className="img-fluid"
                          alt=""
                        />
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
                        Photographer & Filmmaker based in Copenhagen, Denmark ✵
                        🇩🇰
                      </p>
                    </div>
                    <div className="follow-item__bg-image">
                      <img
                        src="/assets/mock-bg.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="follow-item">
                    <div className="follow-item__header">
                      <div className="follow-item-header__profile-image">
                        <img
                          src="/assets/profile.jpg"
                          className="img-fluid"
                          alt=""
                        />
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
                        Photographer & Filmmaker based in Copenhagen, Denmark ✵
                        🇩🇰
                      </p>
                    </div>
                    <div className="follow-item__bg-image">
                      <img
                        src="/assets/mock-bg.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
