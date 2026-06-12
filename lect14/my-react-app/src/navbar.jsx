// import React from 'react'
// import './App.css'
// import { Link } from 'react-router-dom'
// // npm i react-router-dom
// const NavBar = () => {
//   return (
//     <div>
//         <nav>
//             <Link to={"/"}>   
//             <li>Home</li>
//             </Link>
//             <Link to={'/about'}>  
//             <li>About</li>
//             </Link>
//             <Link to={"/cart"}>  
//             <li>Cart</li>
//             </Link>
//         </nav>
//     </div>
//   )
// }

// export default NavBar


import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

// npm i react-router-dom  (if already installed check in package.json)
// npm run dev

const Navbar = () => {
  return (
    <div>
      <nav>

        <Link to={"/"}>
           <li>Home</li>
        </Link>

        <Link to={"/about"}>
           <li>About</li>
        </Link>
        
        <Link to={"/cart"}>
           <li>Cart</li>
        </Link>   
        <li><button>Login</button></li>
      </nav>
    </div>
  )
}

export default Navbar