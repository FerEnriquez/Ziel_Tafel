import React from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import '../styles/task.css'

class TaskComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: '',
      items: [],
    };
    
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id: props.id_task,
      name: props.name_task,
      status: props.status_task
    };
  }

  render() {
      return (
        <div>
          <div className="box-task">
            <span className="checkbox-task">
              <input type="checkbox" />
            </span>  
            <span className="text-task">
              {this.state.name}
            </span>
          </div>
        </div>

      );
  }
}

ReactDOM.render(
  <TaskComponent />,
  document.getElementById('root')
);

export default function Task({ task: { id, name, status } }) {
  return (
    <div>
      <TaskComponent id_task={id} name_task={name} status_task={status} />
    </div>
  );
}

Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  };