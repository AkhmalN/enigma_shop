import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cart() {

   const [dataCart, setDataCart] = useState([])


   const getDataCart = async() => {
      try {
         let responseGetDataCart = await axios.get(`https://fakestoreapi.com/carts`)
         console.log(responseGetDataCart)
      } catch (error) {
         
      }
   }

   useEffect(()=> {
      getDataCart()
   })


   return (
      <div>
         
      </div>
   )
}

export default Cart
