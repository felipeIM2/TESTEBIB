import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import Recovery from './pages/recoveryPass/RecoveryPage';
import Home from './pages/homePage/HomePage';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/recovery" element={<Recovery/>} />
      </Routes>
    </Router>
  );
}

export default App;
