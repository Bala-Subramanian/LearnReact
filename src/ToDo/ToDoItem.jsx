import React from 'react';

function TodoItem({ task_id,task, deleteTask, toggleCompleted }) {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <tr className="todo-item">
      <td>
        <p>{task_id}</p>
      </td>
      <td>
        <input 
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
      </td>
      <td>
        <p>{task.text}</p>
      </td>
      <td>
        <button onClick={() => deleteTask(task.id)}>
          X
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
