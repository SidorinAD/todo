import { Button, Checkbox } from "@material-ui/core"
import { Box } from "@material-ui/core"



export const TodoItem = ({props} : any) => {
    return (
      <Box display="flex">
        <p>{props.id}</p>
        <p>{props.title}</p>
        <Checkbox
          checked={props.completed}
          
        />
        <Button onClick={() => todo.removeTodo(props.id)}>X</Button>
      </Box>
    );
}

