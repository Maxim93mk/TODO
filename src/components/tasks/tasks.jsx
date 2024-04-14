import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'

function TasksMain(data, bgColor) {
    console.log(bgColor)
    let blockTasksHeader = data.name;
    let tasksList = data.tasks.map((elem)=>{
      return <TaskItem taskName = {elem} />
    });

    return (
        <>
            <div className="tasks-block" style={bgColor}>
                <div className="tasks-block-line"></div>
                    <h2 className="tasks-block__header">{blockTasksHeader}</h2>
                    {tasksList}
            </div>
        </>
    );
}

export default TasksMain;