import React, { useState } from 'react'

export const TaskCreator = ({createNewTask}) => {

    const [nuevaTarea, setNuevaTarea] = useState('')
//no refresca la pagina y Limpia el input
const handleSubmit = (e) => {
    
    e.preventDefault();
    createNewTask(nuevaTarea)
    localStorage.setItem('tasks', nuevaTarea)
    setNuevaTarea('')

}
    return (
        <form onSubmit={handleSubmit} className='my-2 row'>
           <div className='col-9'>
           <input value={nuevaTarea} type="text" placeholder='Ingresa una nueva Tarea'
                onChange={(e) => setNuevaTarea(e.target.value)} 
                
                className='form-control'/>

           </div>
           <div className='col-3'>
           <button className='btn btn-primary btn-sm'>Guardar Tarea</button>

           </div>
        </form>

    )

}