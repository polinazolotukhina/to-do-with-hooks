import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";

function List({ task, deleteItem }) {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="flex-start"
    >
      {task &&
        task.map(item => (
          <Grid
            container
            item
            direction="row"
            justify="space-between"
            alignItems="center"
            key={task.id}
          >
            <FormControlLabel
              control={<Checkbox value={item.name} />}
              label={item.name}
            />

            <div
              onClick={() => {
                deleteItem(item.id);
              }}
              style={{ cursor: "pointer" }}
            >
              <DeleteIcon />
            </div>
          </Grid>
        ))}
    </Grid>
  );
}

export default List;
