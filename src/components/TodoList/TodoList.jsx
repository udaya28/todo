import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@material-ui/core';

function TodoList() {
  const [todos, addTodo] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handelClick = (e) => {
    e.preventDefault();
    addTodo([...todos, { task: input, completed: false }]);
    setInput('');
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
            <ListItem>
              <ListItemText primary={todo.task}  /> 
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default TodoList;
