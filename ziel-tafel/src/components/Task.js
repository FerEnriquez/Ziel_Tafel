import React from 'react';
import ReactDOM from'react-dom';
import '../styles/task.css';

class TaskComponent extends React.Component{
  
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
            <input class="inp-cbx" id="cbx" type="checkbox" style={{display: 'none'}}/>
            <label class="cbx" for="cbx"><span>
            <svg width="12px" height="9px" viewbox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
            </svg></span><span className="text-task">Reward yourself with a nap</span></label>
        </div>

      );
  }
}

ReactDOM.render(
  <TaskComponent />,
  document.getElementById('root')
);

export default function Task() {
  return (
    <div>
      <TaskComponent />
    </div>
  );
}

