import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Log_Reg from './pages/user/Log_Reg'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Forgot from './pages/user/Forgot'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import ProtectedRoute from './components/auth/ProtectedRoute'
import PublicRoute from './components/auth/PublicRoute'
import Content from './pages/Modulos/Content'
import AreaCobertura from './pages/Modulos/Content/AreaCobertura'
import ModeloOsi from './pages/Modulos/Content/ModeloOsi'
import Test from './pages/Modulos/Test'
import TestFormularios from './pages/Modulos/TestForm/TestFormularios'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Log_Reg />} />
        <Route path='/home' element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/forgot' element={<PublicRoute><Forgot /></PublicRoute>} />
        <Route path='/content' element={<ProtectedRoute><Layout><Content /></Layout></ProtectedRoute>} />
        <Route path='/modeloosi' element={<ProtectedRoute><Layout><ModeloOsi /></Layout></ProtectedRoute>} />
        <Route path='/areacobertura' element={<ProtectedRoute><Layout><AreaCobertura /></Layout></ProtectedRoute>} />
        <Route path="/test/:id" element={<ProtectedRoute><Layout><TestFormularios /></Layout></ProtectedRoute>} />
        {/* Agregué también la ruta para Test si la necesitas */}
        <Route path="/test" element={<ProtectedRoute><Layout><Test /></Layout></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App