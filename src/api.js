import { db } from "./firebase"

export function getLists() {
  return db.collection('lists')
    .get()
    .then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      return items
    })
    .catch(error => {
      console.log(error)
    })
}
export function getListTodos(listId) {
  return db.collection('todos')
    .where("listId", "==", listId)
    .get()
    .then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      return items
    })
    .catch(error => {
      console.log(error)
    })
}
export function createTodo(data) {
  return db.collection("todos").add({
    ...data,
    completed: false,
  })
    .then((dockRef) => dockRef.get())
    .then(doc => ({
      id: doc.id,
      ...doc.data()
    }))
}
export function deleteTodo(todoId) {
  return db.collection('todos').doc(todoId).delete()
    .then(() => todoId)
}
export function updateTodo(todoId, data) {
  return db.collection('todos').doc(todoId).update(data)
}