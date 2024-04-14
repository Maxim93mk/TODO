import React from "react";
import './css/task-user.css';

function TaskUser({img, descr, text}) {
    return (
        <>
            <div className="user">
                <img src={img} alt={descr} />
                <div className="user-status">{text}</div>
            </div>
        </>
    );
}

export default TaskUser;