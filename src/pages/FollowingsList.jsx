import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowingCard from "./FollowingCard";

function FollowingsList() {
  const user = useSelector((state) => state.authReducer.user);
  const { followings } = user;
  console.log(followings);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getFollowings());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "30rem",
        margin: "2rem 30rem",
      }}
    >
      <h3>List of my followings:</h3>
      {followings.length === 0
        ? "No followings"
        : followings.map((el) => <FollowingCard following={el} key={el._id} />)}
    </div>
  );
}

export default FollowingsList;
