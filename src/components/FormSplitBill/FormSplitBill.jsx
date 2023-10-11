import React from "react";
import Button from "../Button/Button";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill width {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️Your expense</label>
      <input type="text" />

      <label>🧍🧍‍♀️{selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>🤑 Clark's expense</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
// 8/97
