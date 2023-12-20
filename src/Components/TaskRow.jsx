export const TaskRow = ({tasks, toggleTask}) => {
    return (

        <tr>
            <td>
                {tasks.name}
                <input
                type="checkbox"
                checked={tasks.done}
                onChange={()=>toggleTask(tasks)}
                />
                
                
            </td>
        </tr>
    )

}