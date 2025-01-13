import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Myappoinments from './pages/Myappoinments'
import Myprofile from "./pages/Myprofile"
import Contact from './pages/Contact'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Dialysiscenters from './pages/Dialysiscenters'
import Servies from './pages/Servies'
import About from './pages/About'
import Signup from './pages/Signup'
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
        <Route path='/dialysis' element={<Dialysiscenters />} />
        <Route path='/services' element={<Servies />} />
        <Route path='/about' element={<About />} />
        <Route path={`/dialysis/:centerid`} element={<Appoinment />} />
        <Route path='/signup' element={<Signup />} />


      </Routes>
    </div>
  )
}

export default App
