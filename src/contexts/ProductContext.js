import React, { createContext, useState, useEffect } from "react";
import axios from "axios"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([])
    
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

      

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
        {children}
    </ProductContext.Provider>
  )
}