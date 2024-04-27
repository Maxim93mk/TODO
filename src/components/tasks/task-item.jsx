import React, { useState } from 'react';
import './css/task-item.css';

function TaskItem({ id, del, mainColor, status, user, cardsTitle}) {
    const [taskx, setTasks] = useState(localStorage.getItem(cardsTitle) ? JSON.parse(localStorage.getItem(cardsTitle)) : []);
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

    // Локальное хранилище
    const setTodosWithSave = (newValue) => {
            

         setTasks(newValue);
        // let value = JSON.parse(localStorage.getItem(cardsTitle));
        // value.push(newTodos)
        // console.log(value)
        // localStorage.setItem(cardsTitle, newTodos)
  }


// let test = JSON.parse(localStorage.getItem(cardsTitle));

//  localStorage.setItem(cardsTitle[3]['value'], "14");
//  setTasks(taskx[0]['value']='25')
console.log(taskx);
// console.log(localStorage.getItem(cardsTitle[0]['value']))
    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <textarea value={taskx}
                        onChange={(evt) => setTodosWithSave(evt.target.value)}
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