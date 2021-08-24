import { makeAutoObservable } from "mobx";
import { todoLink } from "../const/const";
import { TodoType } from "../types/types";


class Todo {
  todos: TodoType[] = [
      
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo() {
    
  }

  fetchTodos() {
      fetch(todoLink)
        .then(response => response.json())
        .then(json => {
            this.todos = [ ...this.todos, ...json]
        })
  }
}

export default new Todo();
