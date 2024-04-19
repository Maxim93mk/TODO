import React, { useState } from 'react';
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'



function TasksMain({ data, mainColor, borderColor, cardsTitle, cardsIcons }) {
    //   const [task, setTasks] = useState('');
    const [tasksArr, setTasksArr] = useState([]);


// console.log(tasksArr)


    function addTasks() {
        const taskToDo = {
            id: Math.ceil(Math.random()*100),
        //    value: task,
        }
        let newTasks =[taskToDo, ...tasksArr];
        setTasksArr(newTasks);
    }

    function removeTask(id){
       let delTask = tasksArr.filter((elem)=>{
            console.log(elem.id, id)
            if(elem.id!=id){
                setTasksArr(delTask);
            }
        })
    }

    // const inputTask ={
    //     value: ''
    // }


    // function addTasks() {

    // const objectTasks =   data.map((elem)=>{
    //           if(elem.name==cardsTitle){
    //         // tasks.push(elem);
    //         let arr = [];
    //         // arr.push(elem);
    //         // console.log(arr)
    //             // console.log(elem)
    //          let newTasks = [elem, ...tasks];
    //          console.log(newTasks)
    //         setTasks(newTasks);
    //          }
    //      });
       
         
    //     //  console.log(newTasks)
     
        
    // }

     let taskBlock = tasksArr.map((elem) =>{
        return <TaskItem key ={elem.id} id={elem.id}  del={removeTask}/>
        // return <TaskItem key ={elem.id} taskName={elem.task} user={elem.user} status={elem.status} />
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
                {taskBlock}
            </section>
        </>
    );
}

export default TasksMain;