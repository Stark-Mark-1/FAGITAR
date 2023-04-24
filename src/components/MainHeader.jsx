import React from 'react'
import '../pages/Home/homeStyle.css'
import {Link} from 'react-router-dom'
import Image from '../Images/main-head.png'
const MainHeader = () => {
  return (
    <header className="main__header">
    <div className="conatainer main__header-container">
      <div className="vision main__header-left">
        <h4>#TasteBudBliss</h4>
        <h1>Food preview what you see, you get.</h1>
        <p>
        Take your business to new heights and achieve success by joining us today. 
        </p>
        
        <Link to='/pricing' className='btn lg'>Get started</Link>
      </div>
      <div className="main__header-right">
        <div className="main__header-image">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
    </header>
  )
}

export default MainHeader;