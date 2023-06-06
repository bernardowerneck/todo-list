import { TodoItem } from "../models/TodoItem";
import { TodoItemPersistency } from "./TodoItemPersistency";

export class TodoItemRepository {
  static _localTodoItems = null;
  static async getAllTodoItems() {
    if (!TodoItemRepository._localTodoItems)
      await TodoItemRepository._refreshLocalItems();

    return TodoItemRepository._localTodoItems;
  }

  static updateTodoItem(id, dto) {
    TodoItemRepository._localTodoItems = TodoItemRepository._localTodoItems.map(
      (item) => (id === item.id ? TodoItem.fromDTO(dto) : item)
    );
    TodoItemPersistency.updateItem(id, dto);
  }

  static newTodoItem(dto) {
    if (!dto.title) {
      throw new Error("Não pode ser criada tarefa sem nome");
    }
    dto.id = TodoItemRepository.lastId + 1;
    dto.isChecked = false;
    TodoItemRepository._localTodoItems =
      TodoItemRepository._localTodoItems.concat([TodoItem.fromDTO(dto)]);
    TodoItemPersistency.createItem(dto);
    return TodoItem.fromDTO(dto);
  }

  static deleteItem(deleteId) {
    TodoItemRepository._localTodoItems =
      TodoItemRepository._localTodoItems.filter(({ id }) => id !== deleteId);
    TodoItemPersistency.deleteItem(deleteId);
  }

  static get lastId() {
    return TodoItemRepository._localTodoItems.reduce(
      (acc, curr) => (acc > curr.id ? acc : curr.id),
      0
    );
  }

  static async _refreshLocalItems() {
    TodoItemRepository._localTodoItems = (
      await TodoItemPersistency.getTodoItems()
    ).map((dto) => TodoItem.fromDTO(dto));
  }
}
