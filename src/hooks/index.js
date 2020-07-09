import { useState, useEffect } from 'react';
import * as api from "../api"

export default function useApi() {
  const [lists, setLists] = useState([])
  const [todos, setTodos] = useState([])

  useEffect(() => {
    api.getLists().then(setLists)
  }, [])

  function getLitst() {
    return api.getLists()
      .then(setLists)
  }

  function getListTodos(listId) {
    return api.getListTodos(listId)
      .then(setTodos)
  }

  function createTodo(data) {
    return api.createTodo(data)
      .then(todo => setTodos([...todos, todo]))
  }

  function deleteTodo(todoId) {
    return api.deleteTodo(todoId)
      .then(todo => { setTodos([...todos.filter((t) => t.id !== todoId)]) })
  }

  function updateTodo(todoId, data) {
    return api.updateTodo(todoId, data)
      .then(todo => {
        setTodos([...todos.map(t => t.id !== todoId
          ? ({ ...t, ...todo })
          : t
        )])
      })
  }

  return {
    data: {
      lists,
      todos
    },
    actions: {
      getLitst,
      getListTodos,
      createTodo,
      deleteTodo,
      updateTodo
    }
  }
}