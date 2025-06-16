import React, { useEffect, useState } from 'react';
import { getTasks, addTask } from '../api';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await addTask({ text });
    setText('');
    fetchTasks();
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <form onSubmit={handleAdd}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New Task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map(task => <li key={task._id}>{task.text}</li>)}
      </ul>
    </div>
  );
}
