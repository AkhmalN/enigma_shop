
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import Card from './card'

function CategoriesFromDetail({details}) {
   const [categories, setCategories] = useState([])

   const getCategories = async() => {
      try {
         let response = await axios.get(`https://fakestoreapi.com/products/category/${details.category}`)
         setCategories(response.data)
      } catch (error) {
         
      }
   }

   useEffect(()=> {
      getCategories()
   })

   return (
      <div className='container-fluid'>
         <Card products={categories}/>
      </div>
   )
}

export default CategoriesFromDetail
