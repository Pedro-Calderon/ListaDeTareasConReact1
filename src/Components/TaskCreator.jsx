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
        <form onSubmit={handleSubmit}>
            <input value={nuevaTarea} type="text" placeholder='Ingresa una nueva Tarea'
                onChange={(e) => setNuevaTarea(e.target.value)} />

            <button >Guardar Tarea</button>
        </form>

    )

}