import React, { useContext, useState } from 'react'
import '../style.css'
import { ProductContext } from '../contexts/ProductContext'
import { BasketContext } from '../contexts/BasketContext'
import Navbar from './Navbar'

const Basket = () => {
  
  const { product } = useContext(ProductContext)
  const { basket, setBasket, initialState, setInitialState, total, setTotal, quantity, setQuantity } = useContext(BasketContext)

  const basketProductID = basket.map((item) => item.id)
  console.log(basketProductID)

  const addItem = (title, price, id, quantity) => {
    setBasket((prev) => [...prev, { title, price, id }])
    setInitialState(initialState + 1)
  }


  const deleteItem = (id) => {
   if(basket === []) {
    setInitialState(0)
    setTotal(0)
   } else {
    setBasket(basket.filter(item => item.id !== id))
   }
  }

  
  console.log(basket)

  return (
    <div>
      <Navbar />
      <div className='basket-container'>
        {basket.map((item, index) => (
          <div className='basket-cart' key={index}>
            <div>
                <h1>{item.title} <span>{quantity}</span></h1>
                <h2>${item.price}</h2>
              </div>
              <div>
                <button onClick={() => addItem(item.title, item.price, item.id, item.quantity)}>+</button>
                <button onClick={() => deleteItem(item.id)}>-</button>
              </div>
          </div>
        ))}
      </div>
      <p>Total: {total} </p>
    </div>
  )
}

export default Basket