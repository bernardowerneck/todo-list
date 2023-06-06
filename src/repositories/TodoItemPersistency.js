const LIST_KEY = "todo-items";

export class TodoItemPersistency {
  static async getTodoItems(filter = null) {
    if (filter) throw Error("not implemented");

    const itemsString = localStorage.getItem(LIST_KEY);
    return itemsString ? JSON.parse(itemsString) : [];
  }

  static async createItem(dto) {
    const items = await TodoItemPersistency.getTodoItems();
    items.push(dto);

    localStorage.setItem(LIST_KEY, JSON.stringify(items));
  }

  static async updateItem(id, dto) {
    localStorage.setItem(
      LIST_KEY,
      JSON.stringify(
        (await TodoItemPersistency.getTodoItems()).map((item) =>
          item.id === id ? dto : item
        )
      )
    );
  }

  static async deleteItem(id) {
    localStorage.setItem(
      LIST_KEY,
      JSON.stringify(
        (await TodoItemPersistency.getTodoItems()).filter(
          (item) => item.id !== id
        )
      )
    );
  }
}
