import { Button, Checkbox, Box } from "@material-ui/core"


export const TodoItem = ({todo} : any) => {
    const {id, title, completed} = todo
  return (
    <Box display="flex">
      <p>{id}</p>
      <p>{title}</p>
      <Checkbox checked={completed}/>
      <Button onClick={() => todo.removeTodo(id)}>X</Button>
    </Box>
  );
};