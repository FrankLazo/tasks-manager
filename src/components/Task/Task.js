import React, { useState } from 'react';
import './Task.sass';

const Task = ({ task, deleteTask, setEditTask, completeToggleTask }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <li>
      <div className={`task-header ${showDetails ? 'with-details' : ''} ${ task.important && 'important-task'} d-flex align-items-center justify-content-between`}>
        <div className="d-flex align-items-center">
          <input
            id={ `checkTask-${task.id}"` }
            type="checkbox"
            className="checkTask"
          ></input>

          <label
            onClick={ () => completeToggleTask(task.id) }
            htmlFor={ `checkTask-${task.id}"` }
            >
            { task.title }
          </label>
        </div>

        <div className="d-flex align-items-center">
          <input
            id={ `checkDetails-${task.id}"` }
            type="checkbox"
            className="detailsTask"
            ></input>

          <label
            htmlFor={ `checkDetails-${task.id}"` }
            onClick={ () => setShowDetails(!showDetails) }
          >
            <div></div>
          </label>
        </div>
      </div>

      {
        showDetails && (
          <div className="task-content">
            <div className="task-container">
              <p className="text-secondary">
                { task.details }
              </p>

              <div className="d-flex flex-row-reverse">
                <button
                  onClick={ () => setEditTask(task) }
                  className="btn-edit-task text-secondary"
                >
                  Editar
                </button>
                
                <button
                  onClick={ () => deleteTask(task.id) }
                  className="btn-delete-task mr-2 text-secondary"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )
      }
    </li>
  );
}

export default Task;