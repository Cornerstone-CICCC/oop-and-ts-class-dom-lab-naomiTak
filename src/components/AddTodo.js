import { Component } from "../common/Component.js";
import { TodoList } from "./TodoList.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.handleAddToList = this.handleAddToList.bind(this)
  }

  handleAddToList() {
    const description = document.querySelector("#todo-input").value
    this.props.todoContext.addTodo(description)
    const productList = new TodoList(this.props).render()
    const todoList = document.querySelector('#wrapper-todos')

    todoList.innerHTML = ""
    todoList.appendChild(productList)

  }
  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `
    addElement.querySelector('#todo-add-btn').addEventListener('click', this.handleAddToList)

    return addElement;
  }
}