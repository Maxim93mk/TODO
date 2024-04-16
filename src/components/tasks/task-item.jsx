import React from "react";
import TaskUser from "./tasks-user";
import foto_1 from "./img/foto_1.svg";
import './css/task-item.css';

function TaskItem({ taskName, mainColor, data }) {

    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <h3 className="task-item-header">{taskName}</h3>
                    <div className="user">
                        <img src={foto_1} alt={"descr"} />
                        <div className="user-status" style={mainColor}>{data}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TaskItem;