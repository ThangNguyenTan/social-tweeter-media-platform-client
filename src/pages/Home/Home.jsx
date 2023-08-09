import React from "react";

import "./home.css";
import {
  PostItem,
  TrendBox,
  FollowSuggestionBox,
  ErrorDisplayer,
} from "../../components";
import { CreateTweet } from "./components";
import useAuthToken from "../../hooks/useAuthToken";
import { useQuery } from "react-query";
import { fetchPosts } from "../../apis";
import { toast } from "react-toastify";

const Home = () => {
  useAuthToken();
  const { isLoading, isError, data, error } = useQuery(
    "fetchPosts",
    fetchPosts
  );

  if (isLoading) {
    return null;
  }

  if (isError) {
    toast.error(error.message, {
      toastId: "error-1",
    });
    return <ErrorDisplayer errorMessage={error.message} />;
  }

  const { posts } = data;

  const renderPosts = () => {
    return posts.map((post) => <PostItem key={post._id} post={post} />);
  };

  return (
    <div id="home-page">
      <div className="home-page__container">
        <div className="left">
          <CreateTweet />
          {renderPosts()}
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
