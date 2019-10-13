import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import List from "./List";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%"
  },
  button: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}));
function App() {
  const classes = useStyles();
  const [task, setTask] = useState([]);
  const [values, setValues] = React.useState({
    name: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const deleteItem = i => {
    const newTask = [...task];
    const res = newTask.filter(t => t.id !== i);
    setTask(res);
  };
  const addTask = () => {
    const res = [
      ...task,
      { name: values.name, done: false, id: task.length + 1 }
    ];
    setTask(res);
    setValues({ name: "" });
  };
  console.log("task", task);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Grid
                item
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-end"
              >
                <Grid item xs={12}>
                  <Typography variant="h5" component="h2">
                    To Do List{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    id="standard-name"
                    label="Task"
                    value={values.name}
                    onChange={handleChange("name")}
                    margin="normal"
                    className={classes.textField}
                  />
                </Grid>
                <Grid container item xs={12} sm={2}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    fullWidth="true"
                    onClick={() => {
                      addTask();
                    }}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
              <List task={task} deleteItem={deleteItem} />
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
