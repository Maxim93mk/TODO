import React from "react";
import TaskUser from "./tasks-user";
import foto_1 from "./img/foto_1.svg";
import './css/task-item.css';

function TaskItem({ taskName, mainColor, userStatus, user }) {

    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <h3 className="task-item-header">{taskName}</h3>
                    {/* <TaskUser mainColor={mainColor} status={userStatus[0]} user={user[1]}/> */}
                    <div className="user">
                        <img src={user} alt={"descr"} />
                        <div className="user-status" style={mainColor}>{userStatus}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TaskItem;