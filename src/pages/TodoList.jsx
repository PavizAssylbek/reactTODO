import React, { useState, useContext, useEffect } from "react";
import { Spinner, Layout } from "mdc-react";

import useApi from "../hooks";

import TodoList from "../component/TodoList";
import TodoForm from "../component/TodoForm";
import TodoDetails from "../component/TodoDetails";

import "./index.scss";

export default function TodoListPage({ match }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const {
    data: { lists, todos },
    actions,
  } = useApi();

  useEffect(() => {
    actions.getListTodos(match.params.listId);
  }, [actions, match.params.listId]);

  function handleSubmit(title) {
    actions.createTodo({
      title,
      listId: list.id,
    });
  }

  function handleUpdate(todoId, data) {
    actions.updateTodo(todoId, data);
  }

  function handleDelete(todoId) {
    actions.deleteTodo(todoId);
  }

  function handleSelect(todo) {
    setSelectedTodo(todo);
  }

  const list = lists.find((list) => list.id === match.params.listId);

  if (!list || !todos) return <Spinner />;

  return (
    <Layout id="todo-list-page" className="page" row>
      <Layout>
        <TodoList
          list={list}
          todos={todos}
          onSelect={handleSelect}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
        <TodoForm onSubmit={handleSubmit} />
      </Layout>

      {selectedTodo && (
        <TodoDetails
          todo={selectedTodo}
          onClose={() => setSelectedTodo(null)}
        />
      )}
    </Layout>
  );
}
