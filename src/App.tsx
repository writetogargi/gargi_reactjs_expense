import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
import ExpenseTracker from './Components/ExpenseTracker';
import ShowData from './Components/ShowList';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/add" element={<ExpenseTracker onTrue="1" onClose="0" />  } />
        <Route path="/" element={ <ShowData/>} />
      </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
