import React from "react";
import Friends from "../Friends/Friends";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
