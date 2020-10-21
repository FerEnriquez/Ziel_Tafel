import React from 'react';
import ReactDOM from'react-dom';
import '../styles/menu.css';

class MenuComponent extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date().getMonth(),
    };
    
  }

  getMonth(){
      if(this.state.currentMonth == 9){
        return "October";
      }
      else{
          return "None";
      }
  }

  render() {
    const { items } = this.state;
      return (
        <div className="menu-bar">
            <label className="calendar">
                Calendar
            </label>
            <label className="month">
                {this.getMonth()}
            </label>
            <label className="logo">
                Ziel Tafel
            </label>
        </div>

      );
  }
}

ReactDOM.render(
  <MenuComponent />,
  document.getElementById('root')
);

export default function List() {
  return (
    <div>
      <MenuComponent />
    </div>
  );
}

