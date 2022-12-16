import React, { createContext, useState, useEffect } from "react";
import axios from "axios"

export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([])
    const [initialState, setInitialState] = useState(0)
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(1)

      

      const addToBasket = (title, price, id) => {
        setBasket((prev) => [...prev, { title, price, id }])
        setTotal(basket.reduce((acc, product) => {
          return acc + product.price;
      }, 0)) 
        setInitialState(initialState + 1) 
      }

  return (
    <BasketContext.Provider value={{ total, setTotal, addToBasket, initialState, setInitialState, basket, setBasket, quantity, setQuantity}}>
        {children}
    </BasketContext.Provider>
  )
}