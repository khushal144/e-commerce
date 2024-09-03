import React from 'react'
import './sidebar.css'
import { BsCart4 } from 'react-icons/bs'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Prices from './Prices/Prices'

function Sidebar({handleChange,navtoggle}) {
  return (
    <>
      <section className={`${navtoggle?'sidebar nav-toggle':'sidebar'} `}>
        <div className="logo-container">
            <h1><BsCart4 />{navtoggle}</h1>
        </div>
        <Category handleChange={handleChange} />
        <Prices handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidebar
