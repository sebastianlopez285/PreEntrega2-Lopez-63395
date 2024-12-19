import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import './ItemListContainer.css'; 


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getProducts()
    .then((data)=> {
      setProducts(data)
    })
    .catch((error)=> {
    console.error(error)
    })
    .finally(()=> {
      console.log("terminò la promesa")
    })
  }, [])

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
