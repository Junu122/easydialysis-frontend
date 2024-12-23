import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Myappoinments from './pages/Myappoinments'
import Myprofile from "./pages/Myprofile"
import Contact from './pages/Contact'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div >
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/myappoinments' element={<Myappoinments />}/>
        <Route path='/myprofile' element={<Myprofile />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/appoinment' element={<Appoinment />}/>
      </Routes>
    </div>
  )
}

export default App
