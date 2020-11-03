import React from 'react';
import ReactDOM from'react-dom';
import '../styles/week.css';
import Task from './Task.js';

class WeekComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      items: [],
    };
  }


  render() {
    const { items } = this.state;
      return (
        <div>
            <div className="list-square">
                <div className="list-title">Week Goals</div>
                <Task></Task>
                <div className="add-item">
                  <form className="add-task">
                    <input placeholder="Enter task"></input>
                    <button type="submit" className="button">+</button>
                  </form>
                </div>
            </div>
        </div>

      );
  }
}

ReactDOM.render(
  <WeekComponent />,
  document.getElementById('root')
);

export default function Week() {
  return (
    <div>
      <WeekComponent />
    </div>
  );
}
