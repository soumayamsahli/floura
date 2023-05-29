
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Navbar } from 'react-bootstrap';
import Register from './components/Register';
import NaVigation  from './components/NaVigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < NaVigation />
       <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>

       </Routes>
      </header>
    </div>
  );
}

export default App;
