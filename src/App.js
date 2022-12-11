import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Fetch from './pages/Fetch';
import Form from './pages/Form';
import Button from './pages/Button'
import Hapus from './pages/Hapus';
import Props from "./pages/Props"

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1 className='uppercase'>Hello, buka route yang sesuai...</h1>} />
      <Route path='/fetch' element={<Fetch />} />
      <Route path='/form' element={<Form />} />
      <Route path='/button' element={<Button />} />
      <Route path='/hapus' element={<Hapus />} />
      <Route path='/props' element={<Props />} />


    </Routes>
  );
}

export default App;
