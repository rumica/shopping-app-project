import React, { useContext, useState } from 'react'
import '../style.css'
import { ProductContext } from '../contexts/ProductContext'
import Navbar from './Navbar'

const Basket = () => {
  
  const { basket, setBasket, initialState, setInitialState, total, setTotal} = useContext(ProductContext)

  const addItem = (title, price, id) => {
    setBasket((prev) => [...prev, { title, price, id }])
    setInitialState(initialState + 1)
  }

  const deleteItem = (id) => {
   setBasket(basket.filter(item => item.id !== id))
   if(basket === []) {
    setInitialState(0)
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
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
              </div>
              <div>
                <button onClick={() => addItem(item.title, item.price, item.id)}>+</button>
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