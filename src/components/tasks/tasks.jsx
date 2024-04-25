import React, { useState } from 'react';
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'


function TasksMain({ id, mainColor, borderColor, cardsTitle, cardsIcons }) {
    const [tasksArr, setTasksArr] = useState(localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id)) : []);
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
        '/img/foto_1.svg',
        '/img/foto_2.svg'
    ];

    // Локальное хранилище
    const setTodosWithSave = (newTodos) => {
        setTasksArr(newTodos);
        localStorage.setItem(id, JSON.stringify(newTodos))
  }
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
        setTodosWithSave(newTasks);
    };

    // Удалить задачу
    function removeTask(id) {
        let delTask = tasksArr.filter((elem) => {
            if (elem.id !== id) {
                return elem;
            }
        });
        setTodosWithSave(delTask);
    };
   
     
    let taskBlock = tasksArr.map((elem) => {
        return <TaskItem
            key={elem.id}
            id={elem.id}
            idBlock = {idBlock}
            del={removeTask}
            mainColor={mainColor}
            status={getRandomNumber(statusArr)}
            user={getRandomNumber(usersArr)}

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