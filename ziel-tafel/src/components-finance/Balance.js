import React from 'react';
import ReactDOM from'react-dom';
import '../styles/balance.css'

class BalanceComponent extends React.Component{
  
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
            <div className="total">
                <table className="box-total">
                <tr className="cantidad">
                <td className="pad">$450,000</td>
                <td>$458,000</td>
                </tr>
                <tr className="description">
                <td>Total sin divisas</td>
                <td>Total con divisas</td>
                </tr>
                </table>
            </div>
            <div className="mensual">
            <table className="table-month">
                <tr>
                <td>Ingresos</td>
                <td>Egresos</td>
                </tr>
                <tr>
                <td>Balance</td>
                </tr>
                <tr>
                <td>Concepto</td>
                <td>Cantidad</td>
                <td>Concepto</td>
                <td>Cantidad</td>
                </tr>
                </table>
            </div>

        </div>
      );
  }
}

ReactDOM.render(
  <BalanceComponent />,
  document.getElementById('root')
);

export default function Balance() {
  return (
    <div>
      <BalanceComponent />
    </div>
  );
}
