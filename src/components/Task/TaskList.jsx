import { useState } from "react";
import { Link } from "react-router-dom";
import Plus from "../../images/plus.svg";
import TaskSelect from "./TaskSelect";
import TaskInput from "./TaskInput"

const TaskList = ({ type, tasks, setTasks, previousType }) => {
  const [showInput, setShowInput] = useState(false)
  let inputType
  let disableButton

  const addNewTask = (taskTitle) => {
    if (taskTitle.length !== 0) {
      let newTask = {
        id: tasks.length + 1,
        title: taskTitle,
        descr: "",
        status: type
      }
      setTasks([...tasks, newTask])
    }
    setShowInput(!showInput)
  }

  const transferTask = (taskId) => {
    let tasksCopy = tasks.slice()
    tasksCopy.find(item => item.id === Number(taskId)).status = type
    setTasks(tasksCopy)
    setShowInput(!showInput)
  }

  if (type === "Backlog") {
    disableButton = false

    inputType = <TaskInput
      addNewTask={addNewTask}
      className={showInput === false ? "task-list__add-task-input-form _hidden" : "task-list__add-task-input-form"}
    />
  } else {
    let taskListSelectOptions = []

    tasks.forEach((task) => {
      if (task.status === previousType) taskListSelectOptions.push(task);
    });

    disableButton = taskListSelectOptions.length === 0 ? true : false;

    inputType = <TaskSelect
      taskListSelectOptions={taskListSelectOptions}
      transferTask={transferTask}
      className={showInput === false ? "task-list__select _hidden" : "task-list__select"}
    />
  }

  return (
    <div className="task-list">
      <h4 className="task-list__title">{type}</h4>
      <div className="task-list__descr">
        {tasks.map(task =>
          (task.status === type) &&
          (
            <Link
              key={task.id}
              to={`tasks/${task.id}`}
              className="task-list__task"
            >
              {task.title}
            </Link>
          )
        )
        }
        <button
          disabled={disableButton}
          className={showInput === false ? "task-list__add-card" : "task-list__add-card _hidden"}
          type="button"
          onClick={() => setShowInput(!showInput)}
        >
          <img src={Plus} alt="Plus" />
          Add card
        </button>
        {inputType}
      </div>
    </div>
  )
}

export default TaskList