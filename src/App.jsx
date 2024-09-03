import Button from "./Components/Button"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import { useState } from "react"

//import data
import products from './db/data'
import Card from "./Components/Card"

function App() {
  const [navtoggle,setNavtoggle]=useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  //input filter
  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  //Radio filters
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //Buttons filter
  const handleClick = event => {
    if(event.target.textContent!='All Products')
    setSelectedCategory(event.target.textContent)
    else
    setSelectedCategory('')
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, newPrice, company, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected)
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(<Card 
    key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice={newPrice}
    />))
  }

  const result=filteredData(products,selectedCategory,query)
  return (
    <>
      <Sidebar handleChange={handleChange} navtoggle={navtoggle}/>
      <Navigation query={query} handleInputChange={handleInputChange} navtoggle={navtoggle} setNavtoggle={setNavtoggle}/>
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App
