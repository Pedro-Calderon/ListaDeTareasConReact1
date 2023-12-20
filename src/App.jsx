import React, { useState, useEffect } from 'react'
import './App.css';
import { TaskCreator } from './Components/TaskCreator'
import { TaskTable } from './Components/TaskTable'

function App() {
  const [tasksItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name == taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {

    setTaskItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    )
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
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

      <div>
        <input type="checkbox" onChange={(e) => setShowCompleted(!showCompleted)} />
        <label >Tareas Realizadas</label>
      </div>
      {

        showCompleted == true && (
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />

        )

      }

    </div>
  )
}

export default App
