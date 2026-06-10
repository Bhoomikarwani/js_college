import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
// npm i react-router-dom
const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to={"/"}>   
            <li>Home</li>
            </Link>
            <Link to={'/about'}>  
            <li>About</li>
            </Link>
            <Link to={"/cart"}>  
            <li>Cart</li>
            </Link>
        </nav>
    </div>
  )
}

export default NavBar