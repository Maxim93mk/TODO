import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'

function TasksMain({data, mainColor, borderColor}) {
    let blockTasksHeader = data.name;
    let userStatus = data.userStatus.map((elem)=>{
        // console.log(elem);
       return elem;
  });  
  console.log(userStatus)
    let tasksList = data.tasks.map((elem) => {
        return <TaskItem taskName={elem} mainColor = {mainColor} userStatus = {userStatus}/>
    });

    return (
        <>
            <div className="tasks-block" style={mainColor}>
                <div className="tasks-block-line" style={borderColor}></div>
                <h2 className="tasks-block__header">{blockTasksHeader}</h2>
                {tasksList}
            </div>
        </>
    );
}

export default TasksMain;