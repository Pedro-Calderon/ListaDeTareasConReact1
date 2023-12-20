export const VisibilityControl = ({setshowCompleted, deleteTask, isChecked}) => {
    const handlerDelete = () => {
        if(window.confirm('Quieres eliminar las tareas?')){
            deleteTask()

        }

    }

    return (

        <div className="d-flex justify-content-between text-center bg-secondary text-white text-center
         p-2 border-secondary">
           <div className="form-check form-switch">
           <input type="checkbox" 
           className="form-check-input"
            onChange={(e) => setshowCompleted(e.target.checked)} 
            checked={isChecked}
            />
            <label >Tareas Realizadas</label>
           </div>

            <button onClick={handlerDelete} className="btn btn-danger btn-sm">Limpiar</button>
        </div>

    )

}