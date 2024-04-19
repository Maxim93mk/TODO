import React, { useState } from 'react';
import TaskUser from "./tasks-user";
import './css/task-item.css';
import { hover } from '@testing-library/user-event/dist/hover';

function TaskItem({id, del, value, task, taskName, setTaskName, user, status, mainColor}) {
     const [taskx, setTasks] = useState([]);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    
    // const fill = mainColor.backgroundColor;
    const fill = mainColor.backgroundColor;

    const boxStyle = {
        borderRadius: '20%',
        backgroundColor: isHover ? fill  : '#ffffff',
     };
    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <textarea value ={taskx} 
                    onChange={(evt)=>setTasks(evt.target.value)}
                    className="task-item-textArea"
                    placeholder='Введите наименование задачи...'
                    autoFocus ></textarea>
                    
                    <div className="taskRow">
                        <img src={user} alt={`${user} icon`} />
                        <div className="user-status" >{status}</div>
                        <div className='btnRemove' 
                        style={boxStyle} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <button onClick={()=>del(id)} className="btnremoveTask"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TaskItem;