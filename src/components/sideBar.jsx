
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SideBar() {

   const [categories, setCategories] = useState([])

   const getCategories = async () => {
      try {
         let response = await axios.get(`https://fakestoreapi.com/products/categories`)
         setCategories(response.data)
      } catch (error) {

      }
   }

   useEffect(() => {
      getCategories()
   })

   return (
      <div>
         <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 fs-8 " >
               <ul className="nav flex-column ">
                  <li className="nav-item">
                     <Link className="nav-link active" href="#">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#">Orders</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#">Products</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#">Customers</Link>
                  </li>
               </ul>
               

               <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
               </h6>
                  <h5>Categories</h5>
               <ul className="nav flex-column mb-2">
                  {categories.map((category, id) => {
                     return (
                        <li className="nav-item" key={id}>
                           <Link className="nav-link" href="#">{category}</Link>
                        </li>
                     )
                  })}
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default SideBar
