import React from 'react'
import './products.css'

function Products({result}) {
  return (
    <>
      <section className="card-container">
        {result}
      </section>
    </>
  )
}

export default Products
