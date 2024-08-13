import React from 'react'
import { Footer } from './footer'

export const Navbar = (props) => {
  return (
    <div>
    <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
      <Footer/>
    </div>
  )
}
