import { Link, useParams } from "react-router-dom";
import "../../styles/TaskEditPage.css";
import Close from "../../images/close.svg"
import { useState } from "react";

const TaskEditPage = ({ tasks, setTasks }) => {
  const { id } = useParams()
  const task = tasks.find(item => item.id === Number(id))
  const [descrEditorShown, setDescrEditorShown] = useState(false)
  const [descrText, setDescrText] = useState(task.descr.length === 0 ? "" : task.descr)
  const editTaskDescr = (text) => {
    let tasksCopy = tasks.slice()
    tasksCopy.find(item => item.id === Number(id)).descr = text
    setTasks(tasksCopy)
    setDescrEditorShown(!descrEditorShown)
  }
  return (
    <main className="main">
      <div className="wrapper">
        <div className="task-edit-page">
          <div className="task-edit-page__header">
            <h1 className="task-edit-page__header-title">{task.title}</h1>
            <Link className="task-edit-page__header-button" to="/">
              <img src={Close} alt="" />
            </Link>
          </div>
          <div
            className="task-edit-page__descr"

          >
            {descrEditorShown ?
              <textarea
                placeholder="Enter the description of the task..."
                className="task-edit-page__descr-editor"
                type="text"
                onChange={(e) => setDescrText(e.target.value)}
                value={descrText}
              >
              </textarea>
              : <div
                className="task-edit-page__descr-text"
              >
                {task.descr.length === 0 ? "This task has no description" : task.descr}
              </div>
            }

            {descrEditorShown
              ? <button
                onClick={() => editTaskDescr(descrText)}
                type="button"
                className="task-edit-page__descr-button"
              >
                Submit
              </button>
              : <button
                onClick={() => setDescrEditorShown(!descrEditorShown)}
                type="button"
                className="task-edit-page__descr-button"
              >
                Edit
              </button>
            }

          </div>
        </div>
      </div>
    </main>
  )
}

export default TaskEditPage