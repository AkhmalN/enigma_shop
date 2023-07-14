import React, { useEffect, useState } from 'react'
import landingImage from '../assets/3255317.jpg'
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
            <h1 className='h1'>Online</h1>
            <h1 className='h1 text-body-secondary '>Shopping</h1>
            <p>Shop for the latest trends in fashion, electronics, and jewelery</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis quas ea inventore praesentium ipsa placeat quidem? Laudantium exercitationem perferendis quae, a eaque dicta inventore eum alias! Aliquam, perferendis nam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis quas ea inventore praesentium ipsa placeat quidem? Laudantium exercitationem perferendis quae, a eaque dicta inventore eum alias! Aliquam, perferendis nam!</p>
            <Link to='/shop' className="btn btn-primary">Shop Now</Link>
          </div>
          <div className="col-md-6">
            <img src={landingImage} alt={landingImage} className="img-fluid" width={800} height={700} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
