import { makeAutoObservable } from "mobx";
import { todoLink } from "../const";
import { TodoType } from "../types";


export class TodoStore {
  todos: TodoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(id: number) {
    const index = this.todos.findIndex(item => item.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed
    }
    
  }

  fetchTodos() {
      fetch(todoLink)
        .then(response => response.json())
        .then(json => {
            this.todos = [ ...this.todos, ...json]
        })
  }
}


