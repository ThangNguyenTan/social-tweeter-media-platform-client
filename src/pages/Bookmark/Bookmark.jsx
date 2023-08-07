import React from "react";

import "./bookmark.css";
import { FollowSuggestionBox, PostItem, TrendBox } from "../../components";

const Bookmark = () => {
  return (
    <div id="bookmark-page">
      <div className="bookmark-page__container">
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

export default Bookmark;
