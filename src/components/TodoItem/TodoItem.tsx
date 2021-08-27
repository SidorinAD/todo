import { Checkbox, Grid, Box } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { green, red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { CheckboxProps } from "@material-ui/core/Checkbox";

import { observer } from "mobx-react-lite";
import { useTodoStore } from "../../utils/hooks";

const GreenCheckbox = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export const TodoItem = observer(({ todoData }: any) => {
  const todo = useTodoStore();
  const { id, title, completed } = todoData;
  console.log(todoData);
  return (
    <Grid container direction="row" spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={1}
          >
            <Typography variant="h6">{id}</Typography>
            <Typography variant="h6">{title}</Typography>
            <Box display="flex" alignItems="center">
              <GreenCheckbox
                checked={completed}
                onClick={() => todo.TodoStore.completeTodo(id)}
              />
              <Delete onClick={() => todo.TodoStore.removeTodo(id)}></Delete>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
});
