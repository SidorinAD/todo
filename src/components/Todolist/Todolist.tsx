import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import { useContext } from "react";

import { Container } from "@material-ui/core";
import { TodoContext } from "../..";



export const TodoList = observer(() => {
    const todo = useContext(TodoContext);
    useEffect(() => {
        todo.fetchTodos();
    }, [todo])
    
  return (
        <Container>
            {todo.todos.map((todo) =>
                <div key={todo.id}>
                    {todo.id}
                    {todo.title}
                </div>
            )}
        </Container>
  );
});

