import React, { useState } from 'react'
import './App.css';
import { TaskCreator } from './Components/TaskCreator'

function App() {
  const [tasksItems, setTaskItems] = useState([
    { name: 'mi primer tarea', done: true },
    { name: 'mi segunda tarea', done: false },
    { name: 'mi tercer tarea', done: false },
  ])
  function createNewTask(taskName){
   if(!tasksItems.find(task=> task.name==taskName)){
      setTaskItems([...tasksItems, {name: taskName,done:false }])
    }
  }

  return (
    <div className='App'>
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>
              {task.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default App
