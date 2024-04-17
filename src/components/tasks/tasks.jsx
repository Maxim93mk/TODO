import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'


function TasksMain({ data, mainColor, borderColor, cardsTitle, cardsIcons }) {

    function randomNumber(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    let Task = data[0].tasks.map((elem, index) => {
        let taskIndex = randomNumber(0, 9);

        if (index == taskIndex) {
            let statusIndex = randomNumber(0, 5);
            let userIndex = randomNumber(0, 1);
            return <TaskItem taskName={elem} mainColor={mainColor} status={data[0].status[statusIndex]} user={data[0].user[userIndex]} />
        }
    });
    function test(event, x) {
        console.log(event.target)
      return document.querySelectorAll('.tasks-block').item(2).append( <TaskItem taskName={"elem"} mainColor={mainColor} status={"data[0].status[statusIndex]"} user={"data[0].user[userIndex]"} />)
        // document.querySelectorAll('.tasks-block').item(2).append(x)
    }
    return (
        <>
            <div className="tasks-block" style={mainColor}>
                <div className="tasks-block-line" style={borderColor}></div>
                <div >
                    <div className="tasks-block__header">
                        <img src={cardsIcons} />
                        <h2 className="tasks-block__title">{cardsTitle}</h2>
                    </div>
                    <div className="btns">
                        <button className='fr' onClick={test}>+</button>
                        <button>-</button>
                    </div>

                </div>
                {Task}

            </div>
        </>
    );
}

export default TasksMain;