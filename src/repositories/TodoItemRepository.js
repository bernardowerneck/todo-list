import { TodoItem } from "../models/TodoItem";

const myTodoItemsDTO = [
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
}
