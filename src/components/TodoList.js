import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
  }

  mount(container) {
    this.state.todos = this.props.todoList
    container.appendChild(this.render())
    // fetch(`http://localhost:3005/products`)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.state.products = data
    //     container.appendChild(this.render())
    //   })
    //   .catch(error => console.error('Error retrieving data:', error))
  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    todoListElement.innerHTML = ''
    console.log(this.props.todoContext.todoList)

    this.props.todoContext.todoList.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      })
      todoListElement.appendChild(todoItem.render())
    })
    
    console.log(todoListElement)
    return todoListElement;
  }
}