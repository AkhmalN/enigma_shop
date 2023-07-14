import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../components/detailCard'
import CategoriesFromDetail from '../components/categoriesFromDetail'
import SideBar from '../components/sideBar'


function Detail() {


   const params = useParams()
   const ID = params.id

   const [details, setDetails] = useState([])
   const [rating, setRating] = useState([])

   const getProductsDetails = async () => {
      try {
         let responseProductsDetails = await axios.get(`https://fakestoreapi.com/products/${ID}`)
         setDetails(responseProductsDetails.data)
         setRating(responseProductsDetails.data.rating)
      } catch (error) {

      }
   }

   useEffect(() => {
      getProductsDetails()
   }, [ID])

   const [cart, setCart] = useState([])


   const addToCart = (data) => {
      console.log(data)
      setCart([...cart, data] )
      console.log(cart)
   }
   return (
      <div className='container-fluid d-flex'>
         <SideBar/>
         <div className='detail-section'>
            <DetailCard details={details} rating={rating} addToCart={addToCart}/>
            <CategoriesFromDetail details={ details}/>
         </div>
      </div>
   )
}

export default Detail
