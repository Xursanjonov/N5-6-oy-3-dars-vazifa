import React from 'react'
import Empty from '../../components/empty/Empty'
import shopEmpty from '../../assets/images/shop-empty.png'
import './cart.css'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartData = useSelector(state => state.cart.cartData)
  // console.log(cartData);

  return (
    <div className='cart container'>
      <Empty
        title="Savatchangiz bo'sh"
        url={shopEmpty} />
    </div>
  )
}

export default Cart