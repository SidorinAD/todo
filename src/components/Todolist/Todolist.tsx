import { observer } from "mobx-react"
import { useEffect } from "react";
import todo from "../../store/todo";


const TodoList = observer(() => {
    useEffect(() => {
        todo.fetchTodos();
    }, [])
    
  return (
        <div>
            {todo.todos.map(todo =>
                <div key={todo.id}>
                    {todo.id}
                    {todo.title}
                </div>
            )}
        </div>
  );
});

export {TodoList}