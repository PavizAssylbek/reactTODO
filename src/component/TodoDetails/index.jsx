import React from "react";
import {
  Typography,
  Checkbox,
  TextField,
  List,
  Layout,
  ListItem,
  ListItemText,
  Icon,
  IconButton,
} from "mdc-react";

import "./index.scss";

export default function TodoDetails({ todo, onClose }) {
  return (
    <aside className="todo-details">
      <Layout className="todo-details__flex">
        <Typography>Детали задачи</Typography>
        <IconButton onClick={onClose}>
          <Icon>close</Icon>
        </IconButton>
      </Layout>
      <Layout>
        <Layout row>
          <Checkbox checkbox={todo.completed} />
          <TextField value={todo.title} onChange={() => {}} fullWidth />
        </Layout>
        <List>
          {todo.steps && todo.steps.length > 0 && (
            <List>
              {todo.steps.map((step, i) => (
                <ListItem key={i}>
                  <ListItemText>{step}</ListItemText>
                </ListItem>
              ))}
            </List>
          )}
        </List>
      </Layout>
    </aside>
  );
}
