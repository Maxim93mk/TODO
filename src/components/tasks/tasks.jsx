import React, { useState } from 'react';
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'
import user_1 from "./img/foto_1.svg";
import user_2 from "./img/foto_2.svg";

function TasksMain({ mainColor, borderColor, cardsTitle, cardsIcons }) {
    const [tasksArr, setTasksArr] = useState([]);
    const statusArr = [
        'Label',
        'Always',
        'Release',
        'UI',
        'Sourcing',
        'Feedback',
        'Webflow'
    ];
    const usersArr = [
        user_1,
        user_2
    ];

    // Случайное значение массива
    const getRandomNumber = (array) => {
        let minVal = 0, maxVal = array.length;
        let randomIndex = Math.floor(minVal + Math.random() * (maxVal - minVal));
        return array[randomIndex];
    };

    // Добавить задачу
    function addTasks() {
        const taskToDo = {
            id: Math.floor(Math.random() * 100),
        }
        let newTasks = [taskToDo, ...tasksArr];
        setTasksArr(newTasks);
    };

    // Удалить задачу
    function removeTask(id) {
        let delTask = tasksArr.filter((elem) => {
            if (elem.id !== id) {
                return elem;
            }
        });
        setTasksArr(delTask);
    };

    let taskBlock = tasksArr.map((elem) => {
        return <TaskItem
            key={elem.id}
            id={elem.id}
            del={removeTask}
            mainColor={mainColor}
            status={getRandomNumber(statusArr)}
            user = {getRandomNumber(usersArr)}
        />
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