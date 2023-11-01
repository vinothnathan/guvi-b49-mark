import React, { useState } from 'react';
import TodoList from './TodoList';
import './index.css';

function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
