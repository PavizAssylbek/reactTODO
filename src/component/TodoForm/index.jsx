import React, { useState } from "react";
import { List, TextField, ListItem } from "mdc-react";

import "./index.scss";

export default function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState("");

  function hundleSubmit(event) {
    event.preventDefault();
    onSubmit(title);
    setTitle("");
  }

  return (
    <form onSubmit={hundleSubmit} className="todo-form">
      <List>
        <ListItem>
          <TextField
            label="Write..."
            value={title}
            onChange={setTitle}
            fullWidth
          />
        </ListItem>
      </List>
    </form>
  );
}
