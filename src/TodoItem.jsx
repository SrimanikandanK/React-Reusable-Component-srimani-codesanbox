import React from 'react';

const TodoItem = ({ task, onDelete }) => {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
