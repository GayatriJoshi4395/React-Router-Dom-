import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/AboutUs'
import Contact from './components/Contact'
import NavbarMain from './components/NavbarMain'

function App() {

  return (
    <Router>
      <NavbarMain/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
    </Router>
  )
}

export default App
