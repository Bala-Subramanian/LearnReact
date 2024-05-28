import React, { useState, useCallback, useMemo } from "react";
import TodoItem from "./ToDoItem";
import "./ToDoApp.css";

function TodoApp() {
    const [idNum, setIdNum] = useState(2);
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Go to GYM',
        completed: true
        },
        {
        id: 2,
        text: 'Throw out the trash',
        completed: false
        }
    ]);


  const addTask = useCallback((text) => {
    var newId = idNum+1; 
    setIdNum(newId);
    // alert("id "+ idNum + "newId "+newId)
    var newTask = {
      id: newId,
      text,
      completed: false
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setText('');
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  }, []);

  const toggleCompleted = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }, []);

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div className="todo-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Completed</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {memoizedTasks.map(task => (
            <TodoItem
              key={task.id}
              task_id={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </tbody>
      </table>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default TodoApp;
