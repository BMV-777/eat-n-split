import { useState } from "react";

import initialFriends from "./friendsList.js";

import FriendsList from "./components/FriendsList/FriendsList";

import Button from "./components/Button/Button.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";
import FormAddFriend from "./components/FormAddFriend/FormAddFriend.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handelAdd(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriends(false);
  }

  function handelShowFriend() {
    setShowAddFriends((show) => !show);
  }

  function handelSelection(friend) {
    // setSelectedFriend(friend);

    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriends(false);
  }

  function handelSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handelSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriends && <FormAddFriend onAddFriends={handelAdd} />}

        <Button onClick={handelShowFriend}>
          {showAddFriends ? "Closed" : "Add Friends"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handelSplitBill}
        />
      )}
    </div>
  );
}

export default App;
// 8/100
