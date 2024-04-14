import React from "react";
import TaskUser from "./tasks-user";
import foto_1 from "./img/foto_1.svg";
import './css/task-item.css';

function TaskItem({ taskName }) {
    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <h3 className="task-item-header">{taskName}</h3>
                    <TaskUser img={foto_1} descr="фото1" text="Label" />
                </div>
            </div>
        </>
    );
}
export default TaskItem;