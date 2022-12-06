import React, { createContext, useState, useEffect } from "react";
import axios from "axios"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([])
    const [basket, setBasket] = useState([])
    const [initialState, setInitialState] = useState(0)
    const [total, setTotal] = useState(0)

    
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const {data: response} = await axios.get('https://dummyjson.com/products');
            const responseArray = response.products; 
            setProduct(responseArray);
          } catch (error) {
            console.error(error.message);
          }
        }
    
        fetchData();
      }, []);
      

      const addToBasket = (title, price, id) => {
        setBasket((prev) => [...prev, { title, price, id }])
        setInitialState(initialState + 1)
        
      }

      

  return (
    <ProductContext.Provider value={{ total, setTotal, addToBasket, product, initialState, setInitialState, setProduct, basket, setBasket}}>
        {children}
    </ProductContext.Provider>
  )
}