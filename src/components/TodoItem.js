import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
  }

  handleDeleteTodo() {
    this.props.todoContext.deleteTodo(this.props.todo)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = `
    <h3>${this.props.todo}</h3>
    <button class="delete-btn">Delete</button>
  `

  todoElement.querySelector('.delete-btn').addEventListener('click', this.handleDeleteTodo)
    return todoElement;
  }
}