import { Input, Button, Grid } from "@material-ui/core"

export const AddTodoForm = () => {
    return (
      <Grid
        container
        direction="row"
        spacing={10}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <form>
            <Input placeholder="Add Todo" fullWidth={true} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "10%" }}
            >
              Add
            </Button>
          </form>
        </Grid>
      </Grid>
    );
}