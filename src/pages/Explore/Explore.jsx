import React from "react";

import "./explore.css";
import { FollowSuggestionBox, PostItem, TrendBox } from "../../components";
import { SearchBar } from "./components";

const Explore = () => {
  return (
    <div id="explore-page">
      <div className="explore-page__container">
        <div className="left">
          <SearchBar />
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

export default Explore;
