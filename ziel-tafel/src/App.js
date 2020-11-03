import React from 'react';
import './App.css';
import './index.css';
import Menu from './components/Menu';
import Month from './components/Month';
import Week from './components/Week';
import Today from './components/Today';
import Task from './components/Task';

function App() {
  return (
    <div>
      <Menu />
      <Task name={{name: "Hacer"}}/>
      {/* <div className="task-box">
        <Week />
        <Month />
      </div> */}
    </div>
  );
}

export default App;
