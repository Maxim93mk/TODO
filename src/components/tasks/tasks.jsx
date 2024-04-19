import React, { useState } from 'react';
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'



function TasksMain({ data, mainColor, borderColor, cardsTitle, cardsIcons }) {
    const [tasksArr, setTasksArr] = useState([]);

    // Добавить задачу
    function addTasks() {
        const taskToDo = {
            id: Math.ceil(Math.random()*100),
        }
        let newTasks =[taskToDo, ...tasksArr];
        setTasksArr(newTasks);
    }

    // Удалить задачу
    function removeTask(id){
       let delTask = tasksArr.filter((elem)=>{
            if(elem.id!=id){
                return elem;
            }
        });
        setTasksArr(delTask);
    }

    let taskBlock = tasksArr.map((elem) =>{
        return <TaskItem 
        key ={elem.id} 
        id={elem.id}  
        del={removeTask} 
        mainColor={mainColor}
        borderColor={borderColor}/>
   });

    return (
        <>
            <section className="card-section" style={mainColor}>
                <div className="card-section-line" style={borderColor}></div>
                <div className="card-section-header">
                    <div className="card-section-header-descr">
                        <img src={cardsIcons} alt={`${cardsTitle} icon`} />
                        <h2 className="card-section-header-descr-title">{cardsTitle}</h2>
                    </div>
                    <button onClick={() => addTasks()} className="card-section-header-addTask">+</button>
                </div>
                
                {taskBlock}
            </section>
        </>
    );
}

export default TasksMain;