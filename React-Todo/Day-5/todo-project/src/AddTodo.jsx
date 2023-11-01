import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      name,
      description,
      status: 'Not Completed',
    };
    addTodo(newTodo);
    setName('');
    setDescription('');
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}


export default AddTodo;


