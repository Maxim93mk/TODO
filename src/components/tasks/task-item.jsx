import React from "react";
import TaskUser from "./tasks-user";
import './css/task-item.css';

function TaskItem() {

    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <h3 className="task-item-header">{"taskName"}</h3>
                    <div className="user">
                        <img src={"user"} alt={`${"user"} icon`} />
                        <div className="user-status" >{"status"}</div>
                        <button className="removeTask">-</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TaskItem;