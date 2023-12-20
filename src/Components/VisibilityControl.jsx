export const VisibilityControl = ({setshowCompleted, deleteTask, isChecked}) => {
    const handlerDelete = () => {
        if(window.confirm('Quieres eliminar las tareas?')){
            deleteTask()

        }

    }

    return (

        <div>
            <input type="checkbox" 
            onChange={(e) => setshowCompleted(e.target.checked)} 
            checked={isChecked}
            />
            <label >Tareas Realizadas</label>

            <button onClick={handlerDelete}>Limpiar</button>
        </div>

    )

}