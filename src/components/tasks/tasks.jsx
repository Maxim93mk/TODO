import React from "react";
import TaskItem from "./task-item";
import '../tasks/css/tasks.css'


function TasksMain({ data, mainColor, borderColor, cardsTitle, tasks, status, user }) {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // let countTasks = randomNumber(0, 10);
    // // let taskIndex = randomNumber(0, 9);
    // let taskIndex;
    // let userIndex = randomNumber(0, 1);

    let toDo_tasks = [];
    let flag = false;
    let test = data[0].tasks.map((elem, index) => {
        let taskIndex = randomNumber(0, 9);
        let  statusIndex = randomNumber(0, 5);
        let userIndex = randomNumber(0, 1);
        if (index == taskIndex) {
            flag = true;
            console.log(elem)
            toDo_tasks.push(elem);
            return <TaskItem taskName={elem} mainColor={mainColor} userStatus={data[0].status[statusIndex]} user={data[0].user[userIndex]} />
        }
        // if (flag == false) {
        //     return <TaskItem taskName={"Текущих задач нет...Пей чай!"} mainColor={mainColor} userStatus={status} user={user} />
        // }
    });


    console.log(toDo_tasks)
    // // console.log(data.tasks.nameTask)
    // let cardsTitle = data[0].cards.map((elem, index) => {
    //     // console.log(elem)
    //      return <h2 className="tasks-block__header">{elem}</h2>
    // });
    // let btn = document.querySelector('.xz');

    // btn.addEventListener('click', ()=>{
    //     console.log("jeklfrk")
    // });

    //  let btn = document.querySelector('.xz');

    //  console.log(btn);

    // console.log(blockTasksHeader);
    //  data.name.forEach((elem,index)=>{
    //     blockTasksHeader = ;

    // });
    // console.log(blockTasksHeader)
    // let tasksList = data.map((elem, index) => {

    //      console.log(elem)
    //  return  elem
    // });
    // let userStatusList = data.userStatus.map((elem, index) => {
    //     // console.log(elem.tasks[index])
    //     //  console.log(elem)
    //  return  elem
    // });
    // // console.log(userStatusList)
    // let out = data.tasks.map((elem, index) => {
    //  return  <TaskItem taskName={tasksList[index]} mainColor = {mainColor} userStatus={userStatusList[index]}/>
    // });
    // console.log(userStatusList)
    //     let userStatus = data.userStatus.map((elem) => {
    //         return elem;
    //    });
    return (
        <>
            <div className="tasks-block" style={mainColor}>

                <div className="tasks-block-line" style={borderColor}></div>
                {/* {blockTasksHeader} */}
                <h2 className="tasks-block__header">{cardsTitle}</h2>
                {test}
                {/* <TaskItem taskName={toDo_tasks} mainColor = {mainColor} userStatus={status} user={user} /> */}
                {/* <TaskItem taskName={data[0].tasks[1]} mainColor = {mainColor} userStatus={status} user={user} />
                <TaskItem taskName={data[0].tasks[2]} mainColor = {mainColor} userStatus={status} user={user} /> */}
                {/* {tasksItem} */}
                {/* <TaskItem taskName={blockTasksHeader} mainColor = {mainColor} /> */}
                {/* <h2 className="tasks-block__header">{blockTasksHeader}</h2> */}
                {/* <TaskItem taskName={tasksList.tasks[0]} mainColor = {mainColor} userStatus={tasksList.userStatus[0]}/>
                <TaskItem taskName={tasksList.tasks[1]} mainColor = {mainColor} userStatus={tasksList.userStatus[1]}/>
                <TaskItem taskName={tasksList.tasks[2]} mainColor = {mainColor} userStatus={tasksList.userStatus[2]}/> */}
            </div>
        </>
    );
}

export default TasksMain;