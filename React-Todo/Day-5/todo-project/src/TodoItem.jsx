import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleStatusChange = (status) => {
    updateTodo(todo.id, { ...todo, status });
    setShowDropdown(false);
  };

  return (
    <div className={`todo-item ${todo.status}`}>
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <div className="status">
        <span onClick={toggleDropdown}>{todo.status}</span>
        {showDropdown && (
          <div className="status-dropdown">
            <button onClick={() => handleStatusChange('Not Completed')}>Not Completed</button>
            <button onClick={() => handleStatusChange('Completed')}>Completed</button>
          </div>
        )}
      </div>
      <div className="buttons">
        <button onClick={() => editTodo(name,description)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;


