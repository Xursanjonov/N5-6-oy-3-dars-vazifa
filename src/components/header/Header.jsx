import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'
import "./Header.css"
// useSelector - input

const Header = () => {
  let wishlistCount = useSelector(state => state.wishlist.value).length
  let cartCount = useSelector(state => state.cart.cartData).length
  return (
    <header className='header'>
      <Link to='/' className='header-logo' >Redux Toolkit</Link>
      <div className="header-lists">
        <NavLink className='header-list-item' to={"/sign-in"}>
          <FaUser color='gray' />
          <span>Sign in</span>
        </NavLink>
        <NavLink className='header-list-item' to={"/wishlist"}>
          <FaHeart color='gray' />
          <span>Wishlist</span>
          {
            wishlistCount ?
              <sup>{wishlistCount}</sup>
              :
              <></>
          }
        </NavLink>
        <NavLink className='header-list-item' to={"/cart"}>
          <FaShoppingCart color='gray' />
          <span>Cart</span>
          {
            cartCount ? <sup> {cartCount} </sup> : <></>
          }
        </NavLink>
      </div>
    </header>
  )
}

export default Header