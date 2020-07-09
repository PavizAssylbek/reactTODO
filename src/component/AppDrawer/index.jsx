import React from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  Icon,
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListGroup,
  ListDivider,
} from "mdc-react";

export default function AppDrawer({ lists }) {
  return (
    <Drawer id="app-drawer">
      <DrawerHeader title="React ToDo" />
      <DrawerContent>
        <ListGroup>
          <List>
            {[
              { icon: "home", title: "Задачи", to: "/" },
              { icon: "star", title: "Важно", to: "/important" },
              { icon: "event", title: "Запланнированные", to: "/planned" },
            ].map((item) => (
              <ListItem key={item.icon} component={NavLink} to={item.to}>
                <ListItemGraphic>
                  <Icon>{item.icon}</Icon>
                </ListItemGraphic>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
          </List>
          <ListDivider element="hr" />
          <List>
            {lists.map((item) => (
              <ListItem key={item.id} component={NavLink} to={item.id}>
                <ListItemGraphic>
                  <Icon>list</Icon>
                </ListItemGraphic>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        </ListGroup>
      </DrawerContent>
    </Drawer>
  );
}
