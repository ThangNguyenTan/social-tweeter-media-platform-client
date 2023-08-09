import React, { useState } from "react";
import { useMutation } from "react-query";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { likePost, unLikePost } from "../../../../apis";

import "./like-button.css";

const LikeButton = ({ postUserLikedId, currentPostId }) => {
  const [userLikedId, setUserLikedId] = useState(postUserLikedId);

  const likePostMutation = useMutation({
    mutationFn: (postId) => {
      return likePost(postId);
    },
  });

  const unLikePostMutation = useMutation({
    mutationFn: (likeId) => {
      return unLikePost(likeId);
    },
  });

  const handleLikeButtonClick = () => {
    if (userLikedId) {
      unLikePostMutation.mutate(userLikedId, {
        onSuccess: () => {
          setUserLikedId(null);
        },
      });
      return;
    }

    likePostMutation.mutate(currentPostId, {
      onSuccess: (data) => {
        setUserLikedId(data.like._id);
      },
    });
  };

  return (
    <div
      className={`interactions__item interactions-item interactions-item-like ${
        userLikedId ? "active" : ""
      }`}
      onClick={handleLikeButtonClick}
    >
      <div className="interactions__item__icon">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="interactions__item__text">Like</div>
    </div>
  );
};

export default LikeButton;
