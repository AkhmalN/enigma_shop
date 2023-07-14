import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'


function Card({ products }) {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };
   return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '20px 0px' }}>
         {products.map((product, id) => {
            return (
               <Link className="card" key={id} style={{ textDecoration: 'none', color: 'black', width: '15rem', height: 'auto' }} to={`/shop/products/${product.id}`}>
                  <div className="card-body" onClick={scrollToTop}>
                     <img className="card-img-top" style={{ width: '150px', height: '130px' }} src={product.image} alt={product.title} />
                     <p className='card-title fw-bold '>{product.category.toUpperCase()}</p>
                     <h5 className="card-title ">{product.title}</h5>
                     <p className="card-text ">${product.price}</p>
                  </div>
               </Link>
            )
         })}
      </div>
   )
}

export default Card
