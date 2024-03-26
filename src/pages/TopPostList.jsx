import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopPostCard from "./TopPostCard";

function PostList() {
  const posts = useSelector((state) => state.postReducer.topPosts);
  const loadPosts = useSelector((state) => state.postReducer.loadPosts);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "30rem",
        margin: "0 30rem",
      }}
    >
      <h1>Trending posts:</h1>
      {loadPosts ? (
        <h3>Loading...</h3>
      ) : posts.length === 0 ? (
        "No posts"
      ) : (
        posts?.map((el) => <TopPostCard post={el} key={el._id} />)
      )}
    </div>
  );
}

export default PostList;
