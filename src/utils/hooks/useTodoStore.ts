import { useContext } from "react";
import { TodoContext } from "../..";

export const useTodoStore = () => {
    const TodoStore = useContext(TodoContext)
    return {
        TodoStore: TodoStore
    }
}