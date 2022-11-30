import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Parsinta from './pages/Parsinta';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Hello</h1>} />
      <Route path='/app' element={<Parsinta />} />
    </Routes>
  );
}

export default App;
