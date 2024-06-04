import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Wishlist from "./pages/wishlist"
import Header from './components/header/Header'
import Cart from './pages/cart'
import SignIn from './pages/sign-in'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default memo(App)