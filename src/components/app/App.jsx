import './App.css';
import React, { useState } from 'react';
import TasksMain from '../tasks/tasks';
import { fragments } from './fragmentStyle.js';

function App() {
  let db = [
    {
      id: 1,
      name: ['To Do', 'In Progress', 'Review', 'Done'],
      // cards: [
      //   {
         tasks: ['Christmas Banners', 'Redo Portfolio'],
         userStatus: ['Label', 'Always', 'Release', 'Feedback', 'Sourcing', 'UI'],
      //   }
      // ],
      
    },
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
  return (
    <>

      <main className='tasks-main'>
        <div className='container'>
          <div className='tasks-main__img'>
            <h1 className='tasks-main__img-header'>Project Example</h1>
            <div className='tasks-main-blocks'>
              <TasksMain
                data={data[0]}
                mainColor={fragments.fragment_toDo_main_color}
                borderColor={fragments.fragment_toDo_border_color}
              />
              <TasksMain
                data={data[0]}
                mainColor={fragments.fragment_inProgress_main_color}
                borderColor={fragments.fragment_inProgress_border_color}
              />
              <TasksMain
                data={data[0]}
                mainColor={fragments.fragment_Review_main_color}
                borderColor={fragments.fragment_Review_border_color}
              />
              <TasksMain
                data={data[0]}
                mainColor={fragments.fragment_Done_main_color}
                borderColor={fragments.fragment_Done_border_color}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
