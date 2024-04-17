import './App.css';
import React, { useState } from 'react';
import TasksMain from '../tasks/tasks';
import { fragments } from './fragmentStyle.js';
import user_1 from "./img/foto_1.svg";
import user_2 from "./img/foto_2.svg";

function App() {
  let db = [
    {
      id: 1,
      cards: [
        'To Do',
        'In Progress',
        'Review',
        'Done',
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
        'Sticker Components',
      ],
      status: [
        'Label',
        'Always',
        'Release',
        'Feedback',
        'Sourcing',
        'UI',
      ],
      user: [
        user_1,
        user_2,
      ]
    }
  ];

  const [data, setNotes] = useState(db);

  let styleCards = [
    fragments.fragment_toDo_main_color,
    fragments.fragment_inProgress_main_color,
    fragments.fragment_Review_main_color,
    fragments.fragment_Done_main_color
  ];

  let tasks = data[0].cards.map((elem, index) => {
    return <TasksMain
      data={data}
      mainColor={styleCards[index][0]}
      borderColor={styleCards[index][1]}
      cardsTitle={elem}
    />
  });


  return (
    <>
      <main className='tasks-main'>
        <div className='container'>
          <div className='tasks-main__img'>
            <h1 className='tasks-main__img-header'>Project Example</h1>
            <div className='tasks-main-blocks'>
              {tasks}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
