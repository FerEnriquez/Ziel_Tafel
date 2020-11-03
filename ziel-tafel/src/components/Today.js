import React from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import '../styles/today.css';
import Task from './Task.js';

class ListComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      items: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      type: props.type_list  
    };
  }

  render() {
    const { items } = this.state;
      return (
        <div>
            <div className="list-square">
                <div className="list-title"> Today Goals</div>
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
  <ListComponent />,
  document.getElementById('root')
);

export default function List({ list: {type} }) {
  return (
    <div>
      <ListComponent type_list={type} />
    </div>
  );
}

List.propTypes = {
  list: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
};
