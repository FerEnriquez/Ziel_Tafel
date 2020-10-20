import React from 'react';
import ReactDOM from'react-dom';
import '../styles/list-month.css'

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
            <div className = "list-square">
                <div className = "list-title">Month goals</div>
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

