import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import React from 'react'
import './App.css'
import { Home } from './pages'
function App() {
  return (
    <div>      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App