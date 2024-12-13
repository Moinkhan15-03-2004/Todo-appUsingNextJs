'use client';

import { useState } from 'react';

const TodoItem = ({ task, index, toggleComplete, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleUpdate = () => {
    if (updatedText.trim()) {
      updateTask(index, updatedText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="w-full px-2 py-1 border rounded-lg"
          />
          <button
            onClick={handleUpdate}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              className="cursor-pointer"
            />
            <span
              className={`${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.text}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
