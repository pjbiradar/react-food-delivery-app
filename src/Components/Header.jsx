import React, { useState } from 'react'
import food_logo from '../assets/Images/foodlogo.png'
import './Header.css'
import { Link, Links } from 'react-router-dom';

import { useOnlinestatus } from '../Utils/useOnlinestatus';

export default function Header() {
  const[loginbtn,setLoginbtn] = useState("login");

  const onlinestatus = useOnlinestatus();
  return (
    <div className="navbar">
        <div className="logo-container">
            <img src={food_logo} alt="food_logo" className="logo" />

        </div>
        <div className="nav-items">
            <ul>
                <li className="status">{onlinestatus ? "🟢 online" : "offline 🔴" }</li>
                
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li> <Link to={"/about"} className="nav-link">About</Link></li>
                <li> <Link to={"/contact"} className="nav-link">Contact Us</Link></li>
               
                <li><Link to={"/grocery"} className="nav-link">Grocery</Link></li>
                <li>cart</li>
                <button className="auth-btn" onClick={()=>{
                   loginbtn === 'login' ?  setLoginbtn("logout"): setLoginbtn("login")}}>{loginbtn}
                </button>
                
            </ul>
        </div>
      

    </div>
    
  )
}
