import React, { useState } from 'react';
import './css/task-item.css';

function TaskItem({ id, del, mainColor, status, user, toDo, setToDo, value, tasksArr, cardsTitle, setTodosWithSave }) {
    const [taskx, setTasks] = useState(value);
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
    // console.log(value, toDo)
    // Локальное хранилище
    //     const setTodosWithSave = (newValue) => {


    //         //  setTasks(newValue);
    //         // let value = JSON.parse(localStorage.getItem(cardsTitle));
    //         // value.push(newTodos)
    //         // console.log(value)
    //         // localStorage.setItem(cardsTitle, newTodos)
    //   }
    // //   let val = tasksArr.map((elem)=>{
    //     return elem.value = taskx;
    //   });

    //   console.log(val)

    // const test = (newVal)=>{

    //   let zx = [newVal, ...taskx]  
    //   setTasks(zx)
    // }
    let test = tasksArr.map((elem) => {

        if (elem.id === id) {
            return elem.value = taskx;

        }

    });

    let testZ = test.filter((elem) => {
        if (elem !== undefined) {
           return elem;
        }
    });


    //  localStorage.setItem(cardsTitle[3]['value'], "14");
    //  setTasks(taskx[0]['value']='25')
    // console.log(localStorage.getItem(cardsTitle[0]['value']))
    // console.log(taskx)
    // setTasks(taskx)
    return (
        <>
            <div className="task-item">
                <div className="task-item-list">
                    <textarea
                        value={testZ}
                        onChange={(evt) => setTasks(evt.target.value)}
                        //  onBlur={() => setTasks(taskx)}
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