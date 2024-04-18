import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'


function TasksMain({ data, mainColor, borderColor, cardsTitle, cardsIcons }) {


    return (
        <>
            <section className="card-section" style={mainColor}>
                <div className="card-section-line" style={borderColor}></div>
                <div className="card-section-header">
                    <div className="card-section-header-descr">
                        <img src={cardsIcons} alt={`${cardsTitle} icon`} />
                        <h2 className="card-section-header-descr-title">{cardsTitle}</h2>
                    </div>
                        <button className="card-section-header-addtask">+</button>
                </div>
                {/* {Task} */}

            </section>
        </>
    );
}

export default TasksMain;