import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core';
import firebase,{db,auth ,signInWithGoogle} from '../../firebase';

// signInWithGoogle();

// import firebase from 'firebase';
// import { auth } from 'firebase-admin';
// import firebase from 'firebase/database'

function TodoList() {
  const [todos, addTodo] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().task));
        console.log(snapshot.docs.map((doc) => doc.id));
        addTodo(snapshot.docs.map((doc) => ({ task: doc.data().task, id: doc.id ,timestamp:doc.data().timestamp})));
      });
      
     auth.onAuthStateChanged(user=>console.log(user));
      return(
        // firebase.auth().signOut()
        console.log("logout")
      )
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handelClick = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
    signInWithGoogle();
    
  };
  return (
    <div>
      <form className="hi" noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Todo"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!input}
          onClick={(e) => {
            handelClick(e);
          }}
        >
          Add
        </Button>
      </form>
      <Container maxWidth="sm">
        <List>
          {todos.map((todo, index) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.task} secondary="Todo" />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default TodoList;
