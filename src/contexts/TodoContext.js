export class TodoContext {
    constructor() {
        this.todoList = [] // this is where products will go
        this.listeners = [] // a collection of func that will listen to changes in cart
    }
    
    addTodo(todo) {
        this.todoList.push(todo)
        this.notifyListeners()
    }
    deleteTodo(value) {
        //this.todoList.push(todo)
        const newArray = this.todoList.filter(n => n !== value); 
        this.todoList = newArray
        console.log(this.todoList)
    }
    getTodo() {
        return this.todoList
    }
    
    subscribe(listener) {
        this.listeners.push(listener)
    }
    
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.todoList))

    }
}