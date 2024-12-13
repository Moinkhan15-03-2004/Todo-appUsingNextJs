'use client';

import { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
