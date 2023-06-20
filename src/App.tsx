import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css'
import Home from './pages/home/home'
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: "70vh"}}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element= {<Home />} />
      </Routes>
    </div>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
