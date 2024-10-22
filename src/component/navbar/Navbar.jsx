import React from 'react'
import style from './navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id ={style.navbar}>
        <ul>
            <li><Link to='/'>Logo</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/allusers">All users</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar