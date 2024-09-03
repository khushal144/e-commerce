import React from 'react'
import './recommended.css'

function Recommended({handleClick}) {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <button className='btns' onClick={handleClick} value={'All Products'}>All Products</button>
          <button className='btns' onClick={handleClick}>Nike</button>
          <button className='btns' onClick={handleClick}>Adidas</button>
          <button className='btns' onClick={handleClick}>Puma</button>
          <button className='btns' onClick={handleClick}>Vans</button>
        </div>
      </div>
    </>
  )
}

export default Recommended
