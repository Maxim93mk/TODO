import React, { useState } from 'react';
import './css/task-item.css';
import user_1 from "./img/foto_1.svg";
import user_2 from "./img/foto_2.svg";

function TaskItem({id, del, mainColor}) {
    const [taskx, setTasks] = useState([]);
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    
    const statusArr = [
        'Label',
        'Always',
        'Release',
        'UI',
        'Sourcing',
        'Feedback',
        'Webflow'
      ];

      const usersArr = [
        user_1,
        user_2
      ];



    // const fill = mainColor.backgroundColor;
    //const fill = mainColor.backgroundColor;

    const boxStyle = {
        borderRadius: '20%',
        backgroundColor: isHover ? mainColor.backgroundColor  : '#ffffff',
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
                        <img src={usersArr[1]} alt={`${usersArr[1]} icon`} />
                        <div className="user-status" >{statusArr[0]}</div>
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