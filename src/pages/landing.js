import React, { useEffect, useState } from 'react'
import landingImage from '../assets/2727507-removebg-preview.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Landing() {

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
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to our E-commerce store</h1>
            <p>Shop for the latest trends in fashion, electronics, and jewelery</p>
            <Link to='/shop' className="btn btn-primary">Shop Now</Link>
          </div>
          <div className="col-md-6">
            <img src={landingImage} alt={landingImage} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center my-5">Featured Products</h2>
        <div className="row">
          {
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '20px 0px' }}>
              {products.map((product, id) => {
                return (
                  <Link className="card" key={id} style={{ textDecoration: 'none', color: 'black', width: '15rem', height: 'auto' }} to={`/shop/products/${product.id}`}>
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
          }
        </div>
      </div>
    </div>
  )
}

export default Landing
