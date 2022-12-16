import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import { BasketContext } from '../contexts/BasketContext'
import '../style.css'

const Navbar = () => {

    const { product } = useContext(ProductContext)
    const { addToBasket, initialState } = useContext(BasketContext)

  return (
    <div className='navbar-container'>
        <NavLink to="/">SHOPPING APP</NavLink>
        <div className='buttons'>
            <button>Sign Up</button>
            <NavLink to="/basket">Basket <span>{initialState}</span></NavLink>
        </div>
    </div>
  )
}

export default Navbar