import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useContext } from "react";

import { Container } from "@material-ui/core";
import { TodoContext } from "../..";

import { TodoItem } from "../TodoItem";

export const TodoList = observer(() => {
  const todo = useContext(TodoContext);
  useEffect(() => {
    todo.fetchTodos();
  }, [todo]);

  return (
    <Container>
      {todo.todos.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} />
      ))}
    </Container>
  );
});
