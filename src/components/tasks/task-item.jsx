import React, { useState } from 'react';
import './css/task-item.css';

function TaskItem({ id, del, mainColor, status, user, valueL, tasksArr }) {
    const [taskx, setTasks] = useState(valueL);
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
    
 const handleBlur = () => {   
        const valueArr = tasksArr.map((elem) => {
            if (elem.id === id) {
                return elem.valueL = taskx;

            }
        });
        
        


    const valueFilter = valueArr.filter((elem) => {

        if (elem !== undefined) {
            return elem;
        }
    });
    console.log('Content auto-saved:', valueFilter);
return valueFilter;
 

};

    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <textarea
                        value={handleBlur()}
                        onChange={(evt) => setTasks(evt.target.value)}
                        // onBlur={()=>console.log(handleBlur())}
                        className="task-item-textArea"
                        placeholder='Введите наименование задачи...'
                        autoFocus
                    ></textarea>
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