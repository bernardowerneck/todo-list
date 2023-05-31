import { useState } from "react";
import "./NewItemFields.css";

function NewItemFields({ onNewItem }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTitle = (e) => setTitle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);

  const createItem = () => {
    onNewItem({ title, description });
    refreshState();
  };

  const refreshState = () => {
    setTitle("");
    setDescription("");
  };
  return (
    <div className="new-item-fields">
      <input value={title} onChange={updateTitle} />
      <input value={description} onChange={updateDescription} />
      <button onClick={createItem}>Add</button>
    </div>
  );
}

export default NewItemFields;
