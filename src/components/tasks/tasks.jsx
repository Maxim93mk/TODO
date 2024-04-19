import React, { useState } from 'react';
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'



function TasksMain({ data, mainColor, borderColor, cardsTitle, cardsIcons }) {
    const [tasks, setTasks] = useState([]);

    function addTasks() {

    const objectTasks =   data.map((elem)=>{
              if(elem.name==cardsTitle){
            // tasks.push(elem);
            let arr = [];
            // arr.push(elem);
            // console.log(arr)
                // console.log(elem)
             let newTasks = [elem, ...tasks];
             console.log(newTasks)
            setTasks(newTasks);
             }
         });
       
         
        //  console.log(newTasks)
     
        
    }

     let list = tasks.map((elem) =>{
        
        return <TaskItem taskName={elem.task} user={elem.user} status={elem.status} />
     
   })
    return (
        <>
            <section className="card-section" style={mainColor}>
                <div className="card-section-line" style={borderColor}></div>
                <div className="card-section-header">
                    <div className="card-section-header-descr">
                        <img src={cardsIcons} alt={`${cardsTitle} icon`} />
                        <h2 className="card-section-header-descr-title">{cardsTitle}</h2>
                    </div>

                </div>
                <button onClick={() => addTasks()} className="card-section-header-addTask">+</button>
                {list}
            </section>
        </>
    );
}

export default TasksMain;