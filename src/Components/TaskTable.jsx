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

        <table className="table table-dark table-striped table-border border-secondary">
            <thead className="table-primary">
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