import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css'
import Home from './pages/home/home'
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastroUsuario from './pages/cadastro/cadastro'
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: "70vh"}}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/temas" element={<ListaTema/>} />
        <Route path="/posts" element={<ListaPostagem />} />
      </Routes>
    </div>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
