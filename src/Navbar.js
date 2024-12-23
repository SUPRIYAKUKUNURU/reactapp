
import React from 'react'
import { Link } from 'react-router-dom'
import  './Navbar.css'
export default function Navbar() {
  return (
    <div className='Navbar'>
      <div><h2 style={{color:"indigo"}}>My Store</h2></div>
      <div>
      <Link to="/product">Home</Link> |
      <Link to="/cart">Cart</Link> | 
      <Link to="/login">Login</Link>
      </div>
      <div>
      <form>
        <input type="text" placeholder="Search" style={{borderRadius:"5px",height:"25px",border:"pink"}}></input>
       </form>
       </div>
    </div>
  )
}
