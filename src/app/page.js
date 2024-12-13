'use client';

import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}
