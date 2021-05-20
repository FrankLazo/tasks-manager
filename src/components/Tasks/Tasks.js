import React, { useState } from 'react';
import Task from './../Task/Task';
import './Tasks.sass'

const initialUserFormValue = '';

const Tasks = ({ user, setUser, tasks, deleteTask, setEditTask, completeToggleTask }) => {
  const [formUser, setFormUser] = useState(false);
  const [userFormValue, setUserFormValue] = useState(initialUserFormValue);
  const [error, setError] = useState(false)

  const showFormUser = (e) => {
    e.preventDefault();

    if (error) setError(false);

    setFormUser(!formUser);
  }
  
  const handleUserChange = (e) => {
    setError(false);
    setUserFormValue(e.target.value);
  }
  
  const setNewUser = (e) => {
    e.preventDefault();

    if (userFormValue.trim().length > 0)
    {
      showFormUser(e);
      setUser(userFormValue);
    }
    else
    {
      setError(true);
    }
  }

  return (
    <section className="tasks col-8">
      <header className="h-tasks d-flex justify-content-between align-items-center">
        <div>
          <h2 className="title">Hello { user }</h2>
          <p className="subtitle text-secondary">You have { tasks.length } Tasks today!</p>
        </div>

        <form className="d-flex align-items-center">
          {
            formUser &&
            (
              <>
                <div className="input-new-user-container">
                  {
                    error &&
                    (
                      <span>* Ingrese un nombre</span>
                    )
                  }
                  <input
                    onChange={ handleUserChange }
                    type="text"
                    autofocus={ !formUser && 'autofocus' }
                  ></input>
                </div>

                <button
                  onClick={ showFormUser }
                  className="btn-change-user-cancel"
                >
                  <span className="text-secondary">X</span>
                </button>
              </>
            )
          }
          <button
            onClick={ formUser ? setNewUser : showFormUser }
            className={ `btn-change-user${ formUser ? '-ok' : ''} text-secondary` }
          >
            <span className={ formUser ? 'btn-text-change-user-ok' : 'btn-text-change-user' }>
              { formUser ? 'OK' : 'Change user' }
            </span>
          </button>
        </form>
      </header>

      <ul>
        {
          tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              setEditTask={setEditTask}
              completeToggleTask={completeToggleTask}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default Tasks;