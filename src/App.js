import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/about/about'
import Blog from './pages/blog/blogs'
import Contact from './pages/Contact/contact'
import FagitAR from './pages/FagitAR/Fagitar-AR'
import NotFound from './pages/NotFound/NotFound'
import Pricing from './pages/Pricing/pricing'
import Navbar from './components/navbar'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Contact/>
    <Home/>
    <About/>
    <Blog/>
    <FagitAR/>
    <NotFound/>
    <Pricing/>
    </BrowserRouter>
    )
  }
  
  export default App