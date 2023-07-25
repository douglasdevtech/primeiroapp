
import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Comentarios from './pages/comentarios/comentario';
import Elenco from './pages/elenco/elenco';


function App() {

  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/elenco' element={<Elenco/>}/>
        <Route path='/comentario' element={<Comentarios/>}/>
        </Routes>
      </BrowserRouter>
  );
}
 
export default App;
