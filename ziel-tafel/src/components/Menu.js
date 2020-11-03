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
    switch(this.state.currentMonth){
      case 0:
        return "January";
      case 1:
        return "Febraury";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6: 
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "Month";
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

