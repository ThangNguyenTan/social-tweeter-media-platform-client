import React from "react";

import "./home.css";
import { PostItem, TrendBox, FollowSuggestionBox } from "../../components";
import { CreateTweet } from "./components";

const Home = () => {
  return (
    <div id="home-page">
      <div className="home-page__container">
        <div className="left">
          <CreateTweet />
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

export default Home;
