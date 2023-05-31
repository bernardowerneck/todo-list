export class TodoItem {
  constructor({ id, title, description, isChecked }) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._isChecked = isChecked;
  }

  static fromDTO(dto) {
    return new TodoItem(dto);
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get isChecked() {
    return this._isChecked;
  }

  toggleChecked() {
    this._isChecked = !this._isChecked;
  }

  get dto() {
    return {
      id: this._id,
      title: this._title,
      description: this._description,
      isChecked: this._isChecked,
    };
  }
}
