import React from "react";
import { TodoList } from "./components/Todolist";
import { AddTodoForm} from './components/AddTodoForm'
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <AddTodoForm/>
      <TodoList/>
    </Container>
  )
}

export default App;
