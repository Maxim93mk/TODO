import React, { useState } from 'react';
import './css/task-item.css';

function TaskItem({ id, del, mainColor, status, user }) {
    const [taskx, setTasks] = useState([]);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        backgroundColor: isHover ? mainColor.backgroundColor : '#ffffff',
    };

    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <textarea value={taskx}
                        onChange={(evt) => setTasks(evt.target.value)}
                        className="task-item-textArea"
                        placeholder='Введите наименование задачи...'
                        autoFocus ></textarea>
                    <div className="taskRow">
                        <div className='user'>
                            <img src={user} alt={`${user} icon`} />
                            <div className="user-status" style={mainColor}>{status}</div>
                        </div>
                        <div className='btnRemove'
                            style={boxStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <button onClick={() => del(id)} className="btnremoveTask"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TaskItem;