import "./TodoItem.css";

function TodoItem({ todoItem }) {
  const checkedClass = todoItem.isChecked ? "checked" : "not-checked";
  return (
    <div className="todo-item">
      <div className="main">
        <h2 className="title">{todoItem.title}</h2>
        <div className="description">{todoItem.description}</div>
      </div>
      <div className={`is-checked ${checkedClass}`}></div>
    </div>
  );
}

export default TodoItem;
