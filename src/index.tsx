import React from "react";
import { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoStore } from "./store/todo-store";

let defaultTodo = new TodoStore();

export const TodoContext = createContext<TodoStore>(defaultTodo);

ReactDOM.render(
  <React.StrictMode>
    <TodoContext.Provider value={new TodoStore()}>
      <App />
    </TodoContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
