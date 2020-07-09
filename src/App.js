import React from 'react';
import { Switch, Route } from 'react-router-dom'


import useApi from './hooks'

import AppDrawer from "./component/AppDrawer"
import AppContent from "./component/AppContent"
import TodoList from "./pages/TodoList"
import './App.scss';

export default function App() {

  const { data: { lists } } = useApi()


  return (
    <div className="app">
      <AppDrawer lists={lists} />

      <AppContent>
        <Switch>
          <Route path="/:listId" component={TodoList} />
        </Switch>
      </AppContent>
    </div>
  );
}
