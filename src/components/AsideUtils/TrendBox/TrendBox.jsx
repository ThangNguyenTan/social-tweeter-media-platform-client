import React from "react";

import "./trend-box.css";

const TrendBox = () => {
  return (
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
  );
};

export default TrendBox;
