import './App.css';
import React from 'react';
import TasksMain from '../tasks/tasks';

function App() {
  return (
    <>
    
      <main className='tasks-main'>
        <div className='container'>
          <div className='tasks-main__img'>
             <h1 className='tasks-main__img-header'>Project Example</h1>
             <div className='tasks-main-blocks'>
                <TasksMain blockTasksHeader="To Do" />
                <TasksMain blockTasksHeader="In Progress" />
                <TasksMain blockTasksHeader="Review" />
                <TasksMain blockTasksHeader="Done" />
             </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
