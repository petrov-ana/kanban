import "../../styles/Main.css";
import TaskList from "../Task/TaskList";

const Main = ({tasks, setTasks}) => {
  const taskTypes = ["Backlog", "Ready", "In progress", "Finished"]
  
  return(
    <main className="main">
      <div className="wrapper">
       {taskTypes.map((type,index) => 
        <TaskList 
          key={type} 
          type={type} 
          tasks={tasks} 
          setTasks={setTasks}           
          previousType={taskTypes[index-1]}
        />
       )}
      </div>
    </main>
  )
}

export default Main