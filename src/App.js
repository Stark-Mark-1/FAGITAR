import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/about/about'
import Blog from './pages/blog/blogs'
import Contact from './pages/Contact/contact'
import FagitAR from './pages/FagitAR/Fagitar-AR'
import NotFound from './pages/NotFound/NotFound'
import Pricing from './pages/Pricing/pricing'
import Navbar from './components/navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/fagitAR' element={<FagitAR/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
      
    </BrowserRouter>
    )
  }
  
  export default App