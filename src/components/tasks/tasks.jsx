import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'


function TasksMain({data, mainColor, borderColor, cardsTitle, cardsIcons}) {

    
    return (
        <>
            <div className="tasks-block" style={mainColor}>
                <div className="tasks-block-line" style={borderColor}></div>
                <div >
                    <div className="tasks-block__header">
                        <img src={cardsIcons} alt={`${cardsTitle} icon`}/>
                        <h2 className="tasks-block__title">{cardsTitle}</h2>
                    </div>
                    <div className="btns">
                        <button className='fr'>+</button>
                        <button>-</button>
                    </div>

                </div>
                {/* {Task} */}

            </div>
        </>
    );
}

export default TasksMain;