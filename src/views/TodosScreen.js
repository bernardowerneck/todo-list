import { useState } from "react";

import TodoItem from "../components/TodoItem";
import NewItemFields from "../components/NewItemFields";
import { TodoItemRepository } from "../repositories/TodoItemRepository";
import "./TodosScreen.css";

function TodosScreen() {
  const [todoItems, setTodoItems] = useState(
    TodoItemRepository.getAllTodoItems()
  );

  const toggleItemCheck = (item) => {
    item.toggleChecked();
    TodoItemRepository.updateTodoItem(item.id, item.dto);
    refreshItems();
  };

  const onNewItem = (dto) => {
    try {
      TodoItemRepository.newTodoItem(dto);
      refreshItems();
    } catch (e) {
      console.error(e.message);
      // mensagem de erro
    }
  };

  const refreshItems = () => setTodoItems(TodoItemRepository.getAllTodoItems());

  const todoComponents = todoItems.map((item) => (
    <TodoItem
      todoItem={item}
      key={item.id}
      onToggleItemCheck={toggleItemCheck}
    />
  ));

  return (
    <div className="app-wrapper">
      <div className="app">
        <h1 className="title">My todo app</h1>
        <div className="todo-list">{todoComponents}</div>
        <NewItemFields onNewItem={onNewItem} />
      </div>
    </div>
  );
}

export default TodosScreen;
