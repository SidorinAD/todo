import { Input, Button, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

import { useTodoStore } from "../../utils/hooks";
import { observer } from "mobx-react-lite";

import React, { useState } from "react";

const useStyles = makeStyles({
  sticky: {
    position: "sticky",
    top: 0,
    background: "white",
  },
  paper: {
    height: "56px",
  },
  box: {
    display: "flex",
    alignContent: "center",
    height: "100%",
  },
  input: {
    paddingLeft: "1rem",
  },
});

export const AddTodoForm = observer(() => {
  const { TodoStore } = useTodoStore();
  const classes = useStyles();
  const [newTodoTitle, setNewTodoTitle] = useState<string>('')
  
  const inputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const enteredTodoTitle = event.target.value;
    setNewTodoTitle(enteredTodoTitle)
    console.log(enteredTodoTitle);
  } 

  const addTodo = () => {
    TodoStore.addTodo(newTodoTitle);
  };
  return (
    <AppBar className={classes.sticky}>
      <form>
        <Paper className={classes.paper}>
          <Box className={classes.box}>
            <Input
              className={classes.input}
              placeholder="Add Todo"
              fullWidth={true}
              value={newTodoTitle}
              onChange={inputChange}
            />
            <Button variant="contained" color="primary" onClick={addTodo}>
              Add
            </Button>
          </Box>
        </Paper>
      </form>
    </AppBar>
  );
});
