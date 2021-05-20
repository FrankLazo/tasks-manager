import React, { useState, useEffect } from 'react';
import './EditTasks.sass'

const initialFormValues = {
  title: '',
  details: '',
  important: false
}

const EditTasks = ({ addTask, updateTask, editTask, setEditTask }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const {title, details, important} = formValues;

  useEffect(() => {
    if (editTask)
    {
      setFormValues(editTask);
    }
    else
    {
      setFormValues(initialFormValues);
    }
  }, [editTask]);

  const updateFormValues = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value
    }

    setFormValues(changedFormValues);
  }
  
  const updateImportant = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.checked
    }
  
    setFormValues(changedFormValues);
  }

  const handleNewTask = (e) => {
    e.preventDefault();

    if (title.trim() === '')
    {
      setError('You must input a title');
      return;
    }

    if (details.trim() === '')
    {
      setError('You must input details');
      return;
    }

    if (editTask)
    {
      updateTask(formValues);
      setSuccess('Success update!');
    }
    else
    {
      addTask(formValues);
      setSuccess('New Task added!');
      setFormValues(initialFormValues);
    }

    setTimeout(() => {
      setSuccess(null)
    }, 2000)

    setError(null);
  }

  return (
    <section className="editTasks col-4">
      <header className="d-flex align-items-center">
        <div className="icon-new-task"></div>
        <h3 className="h4 mb-0">
          {
            editTask ? 'Edit task' : 'Set a new Task'
          }
        </h3>

        {
          editTask &&
          (
            <button
              className="cancel-edit-task-btn"
              onClick={ () => setEditTask(false) }
            >Cancel</button>
          )
        }
      </header>

      <form
        onSubmit={ handleNewTask }
      >
        <input
          onChange={updateFormValues}
          name="title"
          value={title}
          type="text"
          placeholder="Title"
          className="new-task-input"
          ></input>

        <input
          onChange={updateFormValues}
          name="details"
          value={details}
          type="text"
          placeholder="Details"
          className="new-task-input"
          ></input>

        <div className="important-container d-flex justify-content-between align-items-center">
          <input 
            onChange={updateImportant}
            id="important"
            name="important"
            type="checkbox"
            className="important-check"
            checked={important}
          ></input>
          
          <label
            htmlFor="important"
            className="important-label"
          >Important</label>
        </div>

        <button
          className="new-task-btn"
        >
          {
            editTask ? 'Update task' : 'Add Task'
          }
        </button>
      </form>

      {
        error &&
        (
          <div className="form-notification error d-flex justify-content-center align-items-center">
            { error }
          </div>
        )
      }

      {
        success &&
        (
          <div className="form-notification success d-flex justify-content-center align-items-center">
            { success }
          </div>
        )
      }
    </section>
  );
}

export default EditTasks;