import React from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import Task from './Task.js';
import '../styles/today.css'

class TodayComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      month: '',
      year: '',
      tasks: [],
    };
    
  }

  static getDerivedStateFromProps(props, state) {
    return {
      day: props.day_today,
      month: props.month_today,
      year: props.year_today
    };
  }

  render() {
      return (
        <div className="box-today">
            <span className="title-today">
                To-do list
            </span>

            <span className="add-task">
                <Popup trigger={
                    <button className="button-addtask">+</button>
                } modal>
                {close => (
                    <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
                    </a>           
                    <div className="header"> New task </div>
                    <div className="content">
                        <input type="textbox"></input>
                        
                    </div>
                    <div className="actions">
                        <button> Add </button>

                    </div>
                    </div>
                )}
                </Popup>
            </span>

            <div className="task-box">
                {/* <Task task = { {name: 'Leer'} }/> */}
            </div>
        </div>

      );
  }
}

ReactDOM.render(
  <TodayComponent />,
  document.getElementById('root')
);

export default function Today({ today: { day, month, year } }) {
  return (
    <div>
      <TodayComponent day_today={day} month_today={month} year_today={year} />
    </div>
  );
}

Today.propTypes = {
    today: PropTypes.shape({
      day: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  };