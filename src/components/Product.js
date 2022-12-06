import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import '../style.css'

const Product = () => {

  const { product, addToBasket } = useContext(ProductContext)

  return (
    <div className='product-container'>
      {product?.map((item, index) => (
        <div key={index} className="product-card">
          {/* <img src={item?.images[0]} alt="" /> */}
          <h1>{item?.title}</h1>
          <div className='card-info'>
          <p className='description'>
            {item.description}</p>
            <h3 className='price'>${item?.price}</h3>
          </div>
          <div>
            <button
            onClick={() => addToBasket(item?.title, item?.price, item?.id)}
            className="basket-button">Add to basket</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product