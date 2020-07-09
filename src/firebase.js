import firebase from "firebase"

firebase.initializeApp({
  apiKey: "AIzaSyD1-A1quERAMrKJwqYvb_K8daIe4QEUTnI",
  authDomain: "reacttodo-191da.firebaseapp.com",
  databaseURL: "https://reacttodo-191da.firebaseio.com",
  projectId: "reacttodo-191da",
  storageBucket: "reacttodo-191da.appspot.com",
  messagingSenderId: "834266642058",
  appId: "1:834266642058:web:d5a186d780b2f990d09f73"
})

const db = firebase.firestore()

export { db }