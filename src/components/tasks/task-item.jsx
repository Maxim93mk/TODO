import React, { useState } from 'react';
import TaskUser from "./tasks-user";
import './css/task-item.css';

function TaskItem({id, del, value, task, taskName, setTaskName, user, status}) {
     const [taskx, setTasks] = useState([]);
     console.log(id)
    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <textarea value ={taskx} 
                    onChange={(evt)=>setTasks(evt.target.value)}
                    className="task-item-input"/>
                    <div className="user">
                        <img src={user} alt={`${user} icon`} />
                        <div className="user-status" >{status}</div>
                    </div>
                    <button onClick={()=>del(id)} className="removeTask">-</button>
                </div>
            </div>
        </>
    );
}
export default TaskItem;