import React from "react";
import Button from "./Button";
export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("https://i.pravatar.cc/48?");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleImageChange(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!name) return;

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {" "}
      <label>Friend Name</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <label>image url</label>
      <input type="text" value={image} onChange={handleImageChange} />
      <Button>Add </Button>
    </form>
  );
}
