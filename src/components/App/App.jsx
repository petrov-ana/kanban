import '../../styles/App.css';
import '../../styles/Mobile.css';
import { Routes, Route } from 'react-router';
import Layout from '../Layout/Layout';
import Main from '../Layout/Main';
import TaskEditPage from '../Task/TaskEditPage';
import { useState, useEffect } from 'react';

const App = () =>{
  const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem('tasks')) || [])  
  useEffect(
    () => {
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
    },
    [tasks]
  )
  return (
    <Routes>
    <Route path='/' element={ <Layout tasks={tasks}/> }>
      <Route path='' element={ <Main tasks={tasks} setTasks={setTasks} /> }/>
      <Route path='/tasks/:id' element={ <TaskEditPage tasks={tasks} setTasks={setTasks}/> }/>
    </Route>
  </Routes>
  )
}

export default App;
