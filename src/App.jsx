import React, { useState, useEffect } from 'react'
import './App.css';
import { TaskCreator } from './Components/TaskCreator'

function App() {
  const [tasksItems, setTaskItems] = useState([])

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name == taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }])
    }
  }
  
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])


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
