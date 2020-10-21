import React from 'react';
import ReactDOM from'react-dom';
import '../styles/list-month.css';
import Task from './Task.js';

class ListComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      items: [],
    };
    
  }

  render() {
    const { items } = this.state;
      return (
        <div>
            <div className="list-square">
                <div className="list-title">Month goals</div>
                <Task></Task>
                <div className="add-item">
                  <form className="add-task">
                    <input placeholder="Enter task"></input>
                    <button type="submit" className="button">Add</button>
                  </form>
                </div>
            </div>
        </div>

      );
  }
}

ReactDOM.render(
  <ListComponent />,
  document.getElementById('root')
);

export default function List() {
  return (
    <div>
      <ListComponent />
    </div>
  );
}

