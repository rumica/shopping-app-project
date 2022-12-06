import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Navbar from './Navbar'
import Product from './Product'


const MainPage = () => {

  return (
   <div>
    <Navbar />
    <Product />
   </div>
  )
}

export default MainPage