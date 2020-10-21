import React from 'react';
import ReactDOM from'react-dom';
import PropTypes from 'prop-types';
import '../styles/list-month.css';
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
      name: props.name_list,
      type: props.type_list  
    };
  }

  render() {
    const { items } = this.state;
      return (
        <div>
            <div className="list-square">
                <div className="list-title">{this.state.name}</div>
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

export default function List({ list: { name, type} }) {
  return (
    <div>
      <ListComponent name_list={name} type_list={type} />
    </div>
  );
}

List.propTypes = {
  list: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
