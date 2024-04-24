import './App.css';
import React from 'react';
import TasksMain from '../tasks/tasks';
import { fragments } from './fragmentStyle.js';

function App() {

  let cards = [
    {
      id: 1,
      name: 'To Do',
      icon: '/img/ToDo.png',
      mainColor: fragments.fragment_toDo_main_color[0],
      borderColor: fragments.fragment_toDo_main_color[1],
    },
    {
      id: 2,
      name: 'In Progress',
      icon: '/img/InProgress.png',
      mainColor: fragments.fragment_inProgress_main_color[0],
      borderColor: fragments.fragment_inProgress_main_color[1],
    },
    {
      id: 3,
      name: 'Review',
      icon: '/img/Review.png',
      mainColor: fragments.fragment_Review_main_color[0],
      borderColor: fragments.fragment_Review_main_color[1],
    },
    {
      id: 4,
      name: 'Done',
      icon: '/img/Done.png',
      mainColor: fragments.fragment_Done_main_color[0],
      borderColor: fragments.fragment_Done_main_color[1],
    },
  ];

  let card = cards.map((elem) => {
    return <TasksMain
      key={elem.id}
      mainColor={elem.mainColor}
      borderColor={elem.borderColor}
      cardsTitle={elem.name}
      cardsIcons={elem.icon}
    />
  });

  return (
    <>
      <main className='tasks-main'>
        <div className='container'>
          <div className='tasks-main__img'>
            <h1 className='tasks-main__img-header'>Project Example</h1>
            <div className='tasks-main-blocks'>
              {card}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
