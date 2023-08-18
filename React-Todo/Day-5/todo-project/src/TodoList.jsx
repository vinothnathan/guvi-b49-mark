import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;


