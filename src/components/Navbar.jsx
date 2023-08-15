import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/burgerlogo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={logo} alt="logo" />
            <div className='mainLink'>
                <NavLink to={"/"}>Anasayfa</NavLink>
                <NavLink to={"/menu"}>Menu</NavLink>
                <NavLink to={"/about"}>Hakkımızda</NavLink>
                <NavLink to={"/contact"}>İletişim</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar