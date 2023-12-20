import React, { useState, useEffect } from 'react'
import './App.css';
import { TaskCreator } from './Components/TaskCreator'
import { TaskTable } from './Components/TaskTable'

function App() {
  const [tasksItems, setTaskItems] = useState([])

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
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={true}/>


    </div>
  )
}

export default App
