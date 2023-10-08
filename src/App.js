import { useState } from "react";

import initialFriends from "./friendsList.js";

import FriendsList from "./components/FriendsList/FriendsList";

import Button from "./components/Button/Button.jsx";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill.jsx";
import FormAddFriend from "./components/FormAddFriend/FormAddFriend.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriends, setShowAddFriends] = useState(false);

  function handelAdd(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriends(false);
  }

  function handelShowFriend() {
    setShowAddFriends((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriends && <FormAddFriend onAddFriends={handelAdd} />}
        <Button onClick={handelShowFriend}>
          {showAddFriends ? "Closed" : "Add Friends"}
        </Button>

        {/* {isOpen ? (
          <FormAddFriend onAdd={handelAdd} />
        ) : (
          <Button onClick={handelIsOpen}>Add Friends</Button>
        )} */}
        {/* <FormAddFriend onAdd={handelAdd} /> */}
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
// 8/99
