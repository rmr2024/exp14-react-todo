import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = event => {
    event.preventDefault();
    if (!text.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTask = id => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const removeTask = id => setTasks(prev => prev.filter(task => task.id !== id));

  return (
    <main className="app-shell">
      <h1>React TODO</h1>
      <form onSubmit={addTask}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a new task" />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.done ? "done" : ""}>
            <label>
              <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
              {task.text}
            </label>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
