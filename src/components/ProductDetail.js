import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { ProductContext } from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const ProductDetail = () => {

    const { addToBasket, product, setProduct } = useContext(ProductContext)

    const { id } = useParams();

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get(`https://dummyjson.com/products/${id}`);
        const responseArray = response; 
        setProduct(responseArray);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <img src={product?.images[2]} alt="" /> */}
      <div>
        <h2>{product?.title} <span>{product?.brand}</span></h2>
        <div>
          <p>{product?.description}</p>
          <p>${product?.price}</p>
        </div>
        <button onClick={() => addToBasket(product?.title, product?.price, product?.id)}>ADD TO BASKET</button>
      </div>
    </div>
  )
}

export default ProductDetail