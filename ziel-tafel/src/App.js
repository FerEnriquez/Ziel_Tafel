import './App.css';
import Today from './components/Today.js';

function App() {
  return (
    <div>
      <Today today={{day: 3, month: 11, year: 2020}} />
    </div>
  );
}

export default App;
