import React from 'react'
import { FaCartPlus } from "react-icons/fa";

function Cart() {
   return (
      <>
         <div to="/cart" className="btn btn-outline-secondary ms-2">
            <FaCartPlus/> Cart
         </div>
      </>
   )
}

export default Cart
