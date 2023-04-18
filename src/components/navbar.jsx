import './navbarStyle.css'
import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import { links } from '../Data'
import Logo from '../Images/logo.png'
import { GoThreeBars } from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md';
const Navbar = () => {
const[showMenu,setMenu]=useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='Logo'>
          <img src={Logo} alt="App logo" />
        </Link>
        <ul className={`nav__links ${showMenu ? 'show-menu':'hide-menu'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                </li>)
            })
          }
        </ul>
        <button className='nav_toggle-btn' onClick={()=>setMenu(!showMenu)}>
          {
            showMenu?<MdOutlineClose/>:<GoThreeBars/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar