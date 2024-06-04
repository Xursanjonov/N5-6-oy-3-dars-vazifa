import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IoCartOutline, IoCart } from "react-icons/io5";
import { like } from '../../context/slice/wishlistSlice'
import { add } from '../../context/slice/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const wishlistData = useSelector(state => state.wishlist.value)
  return (
    <div className='product__item'>
      <img src={product.images[0]} width={200} alt="" />
      <h3>{product.title}</h3>
      <div className="product__item__btns">
        <button className='product__item__like' onClick={() => dispatch(like(product))}>
          {
            wishlistData.some(el => el.id === product.id)
              ? <FaHeart color='crimson' /> : <FaRegHeart />
          }
        </button>
        <button onClick={() => dispatch(add(product))} className='product__item__shop' >
          <IoCartOutline />
        </button>
      </div>
    </div>
  )
}

export default memo(ProductItem)