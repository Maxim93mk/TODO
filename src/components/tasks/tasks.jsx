import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'

function TasksMain({ blockTasksHeader }) {
    return (
        <>
            <div className="tasks-block">
                <div className="tasks-block-line"></div>
                    <h2 className="tasks-block__header">{blockTasksHeader}</h2>
                    <TaskItem taskName="Christmas Banners" />   
                    <TaskItem taskName="Redo Portfolio" /> 
            </div>
        </>
    );
}

export default TasksMain;