import React from 'react';
import Tasks from './../Tasks/Tasks';
import EditTasks from './../EditTasks/EditTasks';
import './Main.sass'

const Main = ({ user, setUser, tasks, deleteTask, addTask, updateTask, editTask, setEditTask, completeToggleTask }) => {
  return (
    <main className="row">
      <Tasks
        user={user}
        setUser={setUser}
        tasks={tasks}
        deleteTask={deleteTask}
        setEditTask={setEditTask}
        completeToggleTask={completeToggleTask}
        />
      
      <EditTasks
        addTask={addTask}
        updateTask={updateTask}
        editTask={editTask}
        setEditTask={setEditTask}
      />
    </main>
  )
}

export default Main;