import React from "react";
import Friends from "../Friends/Friends";

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
