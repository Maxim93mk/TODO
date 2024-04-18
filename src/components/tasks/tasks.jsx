import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'


function TasksMain({ data, mainColor, borderColor, cardsTitle, cardsIcons }) {

    function test(s) {
        // evt.target.
      
         return <p>{s}</p>
    }

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
                <button onClick={()=>test("fff")} className="card-section-header-addTask">+</button>
                {test('zxc')}
            </section>
        </>
    );
}

export default TasksMain;