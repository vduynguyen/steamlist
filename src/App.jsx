import React, { useState } from 'react';
import './App.css'; // optional styling
import 'font-awesome/css/font-awesome.min.css'; // Importing the CSS for icons
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import the pages from the 'pages' folder
import About from './pages/About';
import Cart from './pages/Cart';
import Movies from './pages/Movies';

function App() {
  const [input, setInput] = useState(''); // to store input from the user
  const [tasks, setTasks] = useState([]); // to store the list of tasks

  // Add new task
  const addTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
      setInput(''); // Clear the input after adding
    }
  };

  // Edit task
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Mark task as completed
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Router>
      <div className="App">
        <h1>StreamList User Events</h1>

        {/* Navigation links */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <Routes>
          <Route path="/" element={
            <div>
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter a new task" 
              />
              <button onClick={addTask}>Add Task</button>

              <ul>
                {tasks.map((task) => (
                  <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
                    <span>{task.text}</span>
                    <button onClick={() => toggleCompletion(task.id)}>
                      {task.isCompleted ? <i className="fa fa-undo"></i> : <i className="fa fa-check"></i>}
                    </button>
                    <button onClick={() => editTask(task.id, prompt("Edit task:", task.text))}>
                      <i className="fa fa-edit"></i>
                    </button>
                    <button onClick={() => deleteTask(task.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          } />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
