import { useState } from "react"

const TaskInput = ({ className, addNewTask }) => {
  const [taskTitle, setTaskTitle] = useState('')
  return (
    <div className={className} >
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        name="add-task"
        type="text"
        className="task-list__add-task-input"
      />
      <button
        name="add-task"
        type="button"
        className="task-list__add-task-input-submit"
        onClick={(e) => {
          e.preventDefault()
          addNewTask(taskTitle)
          setTaskTitle('')
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default TaskInput