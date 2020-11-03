import React from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import '../styles/task.css';

class TaskComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: 'Tarea',
      items: [],
    };
    
  }

  static getDerivedStateFromProps(props, state) {
    return {
      name: props.name
    };
  }

  render() {
    const { items } = this.state;
      return (
        <div>
            <input class="inp-cbx" id="cbx" type="checkbox" style={{display: 'none'}}/>
            <label class="cbx" for="cbx">
              <span> 
              <svg width="12px" height="9px" viewbox="0 0 12 9">
               <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
              </span>
              <span className="text-task">{this.state.name}</span>
            </label>
        </div>

      );
  }
}

ReactDOM.render(
  <TaskComponent />,
  document.getElementById('root')
);

export default function Task({task:{name}}) {
  return (
    <div>
      <TaskComponent name={name} />
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
