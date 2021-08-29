import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useTodoStore } from "../../utils/hooks";
import { TodoItem } from "../TodoItem";

export const TodoList = observer(() => {
  const {TodoStore} = useTodoStore();
  useEffect(() => {
    TodoStore.fetchTodos();
  }, [TodoStore]);

  return (
    <Container>
      {TodoStore.todos.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} />
      ))}
    </Container>
  );
});
