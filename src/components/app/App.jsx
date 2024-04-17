import './App.css';
import React, { useState } from 'react';
import TasksMain from '../tasks/tasks';
import { fragments } from './fragmentStyle.js';
import { dataList } from './data.js';


function App() {
  
 const [data, setNotes] = useState(dataList.data);

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
      cardsIcons={data[0].cardsIcons[index]}
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
