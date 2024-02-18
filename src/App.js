import React from 'react'
import Register from './components/Register'
import Loogin from './components/Loogin'
import Home from './components/Home'
import Content from './components/Content' 
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './components/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Register/>}/>
        <Route path='/login' element={<Loogin/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/main' element={<Content/>}/>
      </Routes>
    </BrowserRouter>
  )
}
