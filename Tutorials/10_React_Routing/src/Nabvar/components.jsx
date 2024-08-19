import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
   
  return (
    <div>
    <nav>
        <ul>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/"><li>About</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
    </nav>
      
    </div>
  )
}

export default NavBar
