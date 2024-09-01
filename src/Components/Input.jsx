import React from 'react'
import data from '../db/data'
function Input({handleChange,value,title,name,color}) {
  return (
    <div>
      <label className="sidebar-label-container">
          <input onChange={handleChange} value={value} name={name} type='radio' />
          <span className="checkmark" style={{backgroundColor:color}}></span>{title}
        </label>
    </div>
  )
}

export default Input
