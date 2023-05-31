import TodoItem from "../components/TodoItem";
import { TodoItemRepository } from "../repositories/TodoItemRepository";
import "./TodosScreen.css";

function TodosScreen() {
  const todoItems = TodoItemRepository.getAllTodoItems();
  const todoComponents = todoItems.map((item) => (
    <TodoItem todoItem={item} key={item.id} />
  ));
  return (
    <div className="app">
      <h1 className="title">My todo app</h1>
      <div className="todo-list">{todoComponents}</div>
    </div>
  );
}

export default TodosScreen;
