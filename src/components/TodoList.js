'use client';

import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleComplete, deleteTask, updateTask }) => {
  return (
    <div className="mt-4">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
