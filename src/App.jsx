import React from 'react'
import { BrowserRouter ,Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}
