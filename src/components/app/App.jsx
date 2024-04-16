import './App.css';
import React, { useState } from 'react';
import TasksMain from '../tasks/tasks';
import { fragments } from './fragmentStyle.js';
import user_1 from "../tasks/img/foto_1.svg";
import user_2 from "../tasks/img/foto_2.svg";

function App() {
  let db = [
    // {
    //   id: 1,
    //   name: 'To Do',
    //   tasks: [
    //     'Christmas Banners',
    //     'Redo Portfolio'],
    //         userStatus: 
    //     [
    //       'Label',
    //       'UI',
    //     ],

    //   // {
    //   //   nameTask:
    //   //     [
    //   //       'Christmas Banners',
    //   //       'Label',
    //   //     ],
    //   //   // userStatus: 
    //   //   // [
    //   //   //   'Label',
    //   //   //   'UI',
    //   //   // ],
    //   // }
    // },
{
      id: 2,
      cards: [
        'To Do',
        'In Progress',
        'Review',
        'Done'
      ],
      tasks: [
        'Christmas Banners',
        'Redo Portfolio',
        'Coffee Break',
        'Updating Portfolio',
        'Release to Figma Community',
        'User Feedback',
        'Background images from humaaans.com',
        'Style Guide',
        'Component Library',
        'Sticker Components'
      ],
        status: [
          'Label',
          'Always',
          'Release',
          'Feedback',
          'Sourcing',
          'UI'
        ],
        user: [
          user_1,
          user_2
        ]
    }
  // ];
// {
//   id: 1,
//   name: ['To Do', 'In Progress', 'Review', 'Done'],
//   // cards: [
//   //   {
//   tasks: [
//     'Christmas Banners',
//     'Redo Portfolio',
//     'Coffee Break',
//     'Updating Portfolio',
//     'Release to Figma Community',
//     'User Feedback',
//     'Background images from humaaans.com',
//     'Style Guide',
//     'Component Library',
//     'Sticker Components'
//   ],
//   userStatus: [
//     'Label',
//     'Always',
//     'Release',
//     'Feedback',
//     'Sourcing',
//     'UI'
//   ],
//   //   }
//   // ], 
// },
// {
//   id: 2,
//   name: 'In Progress',
//   // tasks: ['Coffee Break', 'Updating Portfolio'],
//   // userStatus: ['Always']
// },
// {
//   id: 3,
//   name: 'Review',
//   // tasks: ['Release to Figma Community', 'User Feedback', 'Background images from humaaans.com'],
//   // userStatus: ['Release', 'Feedback', 'Sourcing']
// },
// {
//   id: 4,
//   name: 'Done',
//   // tasks: ['Style Guide', 'Component Library', 'Sticker Components'],
//   // userStatus: ['UI']
// },
 ];
const [data, setNotes] = useState(db);
let styleCards = [
  fragments.fragment_toDo_main_color,
  fragments.fragment_inProgress_main_color, 
  fragments.fragment_Review_main_color, 
  fragments.fragment_Done_main_color
];
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let countTasks = randomNumber(0, 10);
let taskIndex = randomNumber(0, 9);
let statusIndex = randomNumber(0, 5);
let userIndex = randomNumber(0, 1);

let tasks = data[0].cards.map((elem,index) => {
  return <TasksMain
     data={data}
     mainColor={styleCards[index][0]}
     borderColor={styleCards[index][1]}
     cardsTitle = {elem}
     tasks = {data[0].tasks[taskIndex]}
     status = {data[0].status[statusIndex]}
     user = {data[0].user[userIndex]}
  />
});



//  console.log(names);
return (
  <>
    <main className='tasks-main'>
      <button className='xz'>test</button>
      <div className='container'>
        <div className='tasks-main__img'>
          <h1 className='tasks-main__img-header'>Project Example</h1>
          <div className='tasks-main-blocks'>
            {tasks}
            {/* <TasksMain
                data={names}
                mainColor={fragments.fragment_toDo_main_color}
                borderColor={fragments.fragment_toDo_border_color}
              /> */}
            {/* <TasksMain
                data={names}
                mainColor={fragments.fragment_inProgress_main_color}
                borderColor={fragments.fragment_inProgress_border_color}
              /> */}
            {/* <TasksMain
                data={data[0]}
                mainColor={fragments.fragment_Review_main_color}
                borderColor={fragments.fragment_Review_border_color}
              />
              <TasksMain
                data={data[0]}
                mainColor={fragments.fragment_Done_main_color}
                borderColor={fragments.fragment_Done_border_color}
              /> */}
          </div>
        </div>
      </div>
    </main>
  </>
);
}

export default App;
