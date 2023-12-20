import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toggleTask, showCompleted=false }) => {

    const TableTask = (doneValue) => {
        return (

            tasks
                .filter(task => task.done == doneValue)
                .map((task) => (

                    <TaskRow tasks={task} key={task.name} toggleTask={toggleTask} />

                ))

        )


    }
    return (

        <table>
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {
                    TableTask(showCompleted)
                }
            </tbody>
        </table>
    )

}