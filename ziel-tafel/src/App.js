import React from 'react';
import './App.css';
import List from './components/List';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <List list={{name: "Month goals"}}/>
      <List list={{name: "Week goals"}}/>
      <List list={{name: "Day goals"}}/>
    </div>
  );
}

export default App;
