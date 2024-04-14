import './App.css';
import React, { useState } from 'react';
import TasksMain from '../tasks/tasks';
import { fragments } from './fragmentStyle.js'

function App() {
  let db = [
    {
      id: 1,
      name: 'To Do',
      count: 3,
      tasks: ['Christmas Banners', 'Redo Portfolio']
    },
    {
      id: 2,
      name: 'In Progress',
      count: 1,
      tasks: ['Coffee Break', 'Updating Portfolio']
    },
    {
      id: 2,
      name: 'Review',
      count: 1,
      tasks: ['Release to Figma Community', 'User Feedback', 'Background images from humaaans.com']
    },
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
                {...data[0]}
                bgColor={fragments.fragment_to_do}
              />
              <TasksMain 
              {...data[1]}
              bgColor={fragments.fragment_2}
               />
              <TasksMain {...data[2]} />
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
