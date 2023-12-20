import React, { useState } from 'react'

export const TaskCreator = () => {
    const [nuevaTarea, setNuevaTarea] = useState()
//no refresca la pagina
const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tarea', nuevaTarea)
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