import React from 'react'
import './nav.css'
import { FiHeart } from 'react-icons/fi';
import { FiMenu } from "react-icons/fi";
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'
function Nav({handleInputChange,navtoggle,setNavtoggle}) {
  return (
    <nav>
      <div className="nav-container">
        <input 
        type='text' 
        placeholder='Enter your search shoes' 
        className='search-input'
        onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <a href='#'>
          <FiHeart className='nav-icons' />
        </a>
        <a href='#'>
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href='#'>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
        <a href='#' onClick={()=>setNavtoggle(!navtoggle)}>
          <FiMenu className='nav-icons m'/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
