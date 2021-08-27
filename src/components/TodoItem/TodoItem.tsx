import { Checkbox, Grid, Box } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { TodoContext } from "../..";

export const TodoItem = observer(({ todoData }: any) => {
  const todo = useContext(TodoContext);
  const { id, title, completed } = todoData;
  console.log(todoData)
  return (
    <Grid container direction="row" spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            p={1}
          >
            <Typography>{id}</Typography>
            <Typography>{title}</Typography>
            <Checkbox
              checked={completed}
              color="primary"
              onClick={() => todo.completeTodo(id)}
            />
            <Delete onClick={() => todo.removeTodo(id)}></Delete>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
});
