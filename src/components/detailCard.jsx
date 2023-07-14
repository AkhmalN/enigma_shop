
import React from 'react'
import '../styles/detail.css'
import StarRatings from 'react-star-ratings'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

function DetailCard({ details, rating, addToCart }) {

   return (
      <div className="card-body border" style={{ width : '400px',display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '20px 0px'}}>
         <div className="card-img-top">
            <img style={{ width: '300px', height: '300px' }} src={details.image || <Skeleton />} alt={details.title} />
         </div>
         <div className=' card-detail'>
            <p className="card-text ">${details.price || <Skeleton />}</p>
            <h5 className="card-title fw-bold">{details.title || <Skeleton />}</h5>
            <Link style={{ textDecoration: 'none', color: 'black' }}>
               <p className='card-title'>{details.category || <Skeleton />}</p>
            </Link>
            <div className='ratings'>
               <StarRatings
                  starRatedColor='#FFA41B'
                  rating={rating.rate}
                  starDimension='20px'
                  starSpacing='0.5px'
               />
               <p className='card-title'>({rating.count} review)</p>
            </div>
            <Link>
               <button className='btn btn-secondary' onClick={()=> addToCart(details)}>Add to Cart</button>
            </Link>
         </div>
      </div>
   )
}

export default DetailCard
