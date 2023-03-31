import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='stock' element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter