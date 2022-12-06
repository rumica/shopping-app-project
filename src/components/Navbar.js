import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import '../style.css'

const Navbar = () => {

    const { addToBasket, product, initialState } = useContext(ProductContext)

  return (
    <div className='navbar-container'>
        <div>SHOPPING APP</div>
        <div className='buttons'>
            <button>Sign Up</button>
            <NavLink to="/basket">Basket <span>{initialState}</span></NavLink>
        </div>
    </div>
  )
}

export default Navbar