import "../../styles/Footer.css"

const Footer = ({tasks}) => {
  let activeTasks = 0
  let finishedTasks = 0

  tasks.forEach((item) => {    
    item.status !== "Finished" ? activeTasks++ : finishedTasks++
  });         

  return(
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__counter">
          <div>
            Active tasks:{activeTasks}
          </div>
          <div>
            Finished tasks:{finishedTasks}
          </div>
        </div>
        <div className="footer__author">
          Kanban board by Andrey, 2022
        </div>
      </div>
    </footer>
  )
}

export default Footer