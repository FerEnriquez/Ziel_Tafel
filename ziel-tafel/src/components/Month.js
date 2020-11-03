import React from 'react';
import ReactDOM from'react-dom';
import '../styles/month.css';
import Task from './Task.js';

class MonthComponent extends React.Component{
  
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
                <div className="list-title">Month Goals</div>
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
  <MonthComponent />,
  document.getElementById('root')
);

export default function Month() {
  return (
    <div>
      <MonthComponent />
    </div>
  );
}
