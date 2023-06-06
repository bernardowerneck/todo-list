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
      <div className="field">
        <label htmlFor="title">Tarefa</label>
        <input id="title" value={title} onChange={updateTitle} />
      </div>
      <div className="field">
        <label htmlFor="description">Descrição</label>
        <input
          id="description"
          value={description}
          onChange={updateDescription}
        />
      </div>

      <button className="btn btn-primary" onClick={createItem}>
        Add
      </button>
    </div>
  );
}

export default NewItemFields;
