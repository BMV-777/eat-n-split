import React, { useState } from "react";
import Button from "../Button/Button";

const FormAddFriend = ({ onAddFriends }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handelForm(e) {
    // if (!item) return;

    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newAdd = { name, image: `${image}?=${id}`, balance: 0, id };
    onAddFriends(newAdd);
    console.log(newAdd);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handelForm}>
      <label>🗽Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌍 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

// <form className="form-add-friend" onSubmit={handelForm}>
//   <label>🗽Friend name</label>
//   <input
//     type="text"
//     value={description}
//     onChange={(e) => setDescription(e.target.value)}
//   />

//   <label>🌍 Image URL</label>
//   <input type="text" />

//   <Button>Add</Button>
// </form>;
