import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

import { TodoItem } from "../TodoItem";

import { Container } from "@material-ui/core";





export const TodoList = observer(() => {
    const todo = useContext(TodoContext)
    useEffect(() => {
        todo.fetchTodos();
    }, [])
    
  return (
        <Container>
            {todo.todos.map((todo: { id: number; }) =>
                <TodoItem props={todo} key={todo.id} />
            )}
        </Container>
  );
});

