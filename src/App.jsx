import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Landingmain from "./components/Landingmain.jsx";
import Register from "./components/Register.jsx";
import AppHome from "./components/AppHome.jsx";
import PrivateRoute from "./components/PrivateAuthRoute.jsx";

function App() {

  return (
    <div className="main-container">
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Landingmain />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<PrivateRoute><AppHome /></PrivateRoute>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
