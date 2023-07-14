import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {


   const [products, setProducts] = useState([])

   const getProducts = async () => {
      try {
         let responseGetProducts = await axios.get(`https://fakestoreapi.com/products?limit=4`)
         setProducts(responseGetProducts.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getProducts()
   })

   return (
      <div>
         <section class="bg-primary text-light py-5">
            <div class="container">
               <div class="row">
                  <div class="col-lg-6">
                     <h1 class="display-4">Welcome to Our E-commerce Store</h1>
                     <p class="lead">Browse through a wide range of products and find the perfect items for your needs.</p>
                     <Link to='/shop' class="btn btn-light btn-lg">Shop Now</Link>
                  </div>
               </div>
            </div>
         </section>

         <section class="container my-5">
            <h2 class="text-center mb-4">Featured Products</h2>
            <div class="row justify-content-center">
               {products.map(product => {
                  return (
                     <Link className="card" key={product.id} style={{ textDecoration: 'none', color: 'black', width: '15rem', height: 'auto' }} to={`/shop/products/${product.id}`}>
                        <div className="card-body">
                           <img className="card-img-top" style={{ width: '150px', height: '130px' }} src={product.image} alt={product.title} />
                           <p className='card-title fw-bold '>{product.category.toUpperCase()}</p>
                           <h5 className="card-title ">{product.title}</h5>
                           <p className="card-text ">${product.price}</p>
                        </div>
                     </Link>
                  )
               })}
            </div>
         </section>

         <section class="bg-light py-5">
            <div class="container">
               <h2 class="text-center mb-4">What Our Customers Say</h2>
               <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4">
                     <div class="card">
                        <div class="card-body">
                           <p class="card-text">"I found the best deals on this website. Highly recommended!"</p>
                           <p class="font-weight-bold">- John Doe</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                     <div class="card">
                        <div class="card-body">
                           <p class="card-text">"Fast delivery and excellent customer service. Will definitely shop here again."</p>
                           <p class="font-weight-bold">- Jane Smith</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                     <div class="card">
                        <div class="card-body">
                           <p class="card-text">"Great quality products at affordable prices. Couldn't be happier with my purchase."</p>
                           <p class="font-weight-bold">- Mike Johnson</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
      

   )
}

export default Home
