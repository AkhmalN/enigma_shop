import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import SideBar from '../components/sideBar'

function Shop() {
   const [products, setProducts] = useState([])

   const getProducts = async () => {
      try {
         let responseGetProducts = await axios.get(`https://fakestoreapi.com/products`)
         setProducts(responseGetProducts.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getProducts()
   })

   return (
      <div className='container-fluid d-flex'>
            <SideBar/>
            <Card products={products} />
      </div>
   )
}

export default Shop
