import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.sass';

// Initial app values for sample

const initialUser = 'Frank';

const initialTasks = [
  {
    id: 1,
    title: 'Practicing piano',
    details: 'Chords in C',
    important: false,
    completed: false
  },
  {
    id: 2,
    title: 'Studying english',
    details: 'Verb To Be',
    important: true,
    completed: false
  },
  {
    id: 3,
    title: 'UI Design',
    details: 'Colors and Fonts',
    important: true,
    completed: false
  },
  {
    id: 4,
    title: 'Exercises',
    details: 'Run and run',
    important: false,
    completed: true
  }
];

// Get Tasks from local storage

const localTasks = JSON.parse(localStorage.getItem('tasks'));

// Main component

function App() {
  const [user, setUser] = useState(initialUser);
  const [tasks, setTasks] = useState(localTasks || initialTasks);
  const [editTask, setEditTask] = useState(null);

  // Save tasks on local storage

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Tasks functions

  const deleteTask = (taskId) => {
    if (editTask && taskId === editTask.id)
    {
      setEditTask(null);
    }
    
    const changedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(changedTasks);
  }

  const completeToggleTask = (taskId) => {
    const changedTasks = tasks.map(task => (
      task.id === taskId
      ? { ...task, completed: !task.completed}
      : task
    ));

    setTasks(changedTasks);
  }

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false
    }

    const changedTasks = [
      newTask,
      ...tasks
    ]

    setTasks(changedTasks);
  }

  const updateTask = (editTask) => {
    const changedTasks = tasks.map(task => (
      task.id === editTask.id
      ? editTask
      : task
    ));

    setTasks(changedTasks);
  }

  return (
    <div className="app container-xl">
      <Header />
      <Main
        user={user}
        setUser={setUser}
        tasks={tasks}
        deleteTask={deleteTask}
        completeToggleTask={completeToggleTask}
        addTask={addTask}
        updateTask={updateTask}
        editTask={editTask}
        setEditTask={setEditTask}
      />
    </div>
  );
}

export default App;
