import React from 'react'
import { useSelector } from 'react-redux'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';
import Empty from '../../components/empty/Empty';
import wishlistEmpty from '../../assets/images/wishlist-empty.jpg'

const Wishlist = () => {
  let wishlistData = useSelector(state => state.wishlist.value)
  console.log(wishlistData);
  return (
    <div>

      {
        wishlistData.length ?
          <ProductWrapper title="Sevimlilar" data={wishlistData} />
          :
          <Empty
            title="Sevimlilar bo'sh"
            url={wishlistEmpty} />
      }
    </div>
  )
}

export default Wishlist