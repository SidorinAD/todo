import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import todo from "../../store/todo-store";
import { Container } from "@material-ui/core";
import { TodoItem } from "../TodoItem";



export const TodoList = observer(() => {
    useEffect(() => {
        todo.fetchTodos();
    }, [])
    
  return (
        <Container>
            {todo.todos.map(todo =>
                <TodoItem props={todo} key={todo.id} />
            )}
        </Container>
  );
});

