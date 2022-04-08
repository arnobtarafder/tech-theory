import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
