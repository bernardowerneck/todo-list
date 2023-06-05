import { TodoItem } from "../models/TodoItem";

let myTodoItemsDTO = [
  { id: 1, title: "example", description: "example", isChecked: true },
  {
    id: 2,
    title: "example not done",
    description: "esse example não foi done",
    isChecked: false,
  },
];

export class TodoItemRepository {
  static getAllTodoItems() {
    return myTodoItemsDTO.map((dto) => TodoItem.fromDTO(dto));
  }

  static updateTodoItem(id, dto) {
    myTodoItemsDTO = myTodoItemsDTO.map((item) =>
      id === item.id ? dto : item
    );
  }

  static newTodoItem(dto) {
    if (!dto.title) {
      throw new Error("Não pode ser criada tarefa sem nome");
    }
    dto.id = TodoItemRepository.lastId + 1;
    dto.isChecked = false;
    myTodoItemsDTO.push(dto);
    return TodoItem.fromDTO(dto);
  }

  static deleteItem(deleteId) {
    myTodoItemsDTO = myTodoItemsDTO.filter(({ id }) => id !== deleteId);
  }

  static get lastId() {
    return myTodoItemsDTO.reduce(
      (acc, curr) => (acc > curr.id ? acc : curr.id),
      0
    );
  }
}
