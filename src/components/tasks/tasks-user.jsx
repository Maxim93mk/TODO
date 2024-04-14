import React from "react";
import './css/task-user.css';

function TaskUser({img, descr, text, mainColor}) {
    return (
        <>
            <div className="user">
                <img src={img} alt={descr} />
                <div className="user-status" style={mainColor}>{text}</div>
            </div>
        </>
    );
}

export default TaskUser;