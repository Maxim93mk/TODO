import React, { useState } from 'react';
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'


function TasksMain({mainColor, borderColor, cardsTitle, cardsIcons}) {
    const [toDo, setToDo] = useState('');
    const [tasksArr, setTasksArr] = useState(localStorage.getItem(cardsTitle) ? JSON.parse(localStorage.getItem(cardsTitle)) : []);
  
    console.log(toDo)
  
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
        localStorage.setItem(cardsTitle, JSON.stringify(newTodos))
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
            value: toDo
        }
        let newTasks = [taskToDo, ...tasksArr];
        setTodosWithSave(newTasks);
          setToDo('');
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
            del={removeTask}
            mainColor={mainColor}
            status={getRandomNumber(statusArr)}
            user={getRandomNumber(usersArr)}
            toDo = {toDo}
            setToDo = {setToDo}
            value = {elem.value}
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