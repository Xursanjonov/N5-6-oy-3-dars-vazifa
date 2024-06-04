import React, { useEffect, useState } from 'react'
import axios from '../../api'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'
import './home.css'

const Home = () => {
  const [data,setData] = useState(null)

  useEffect(()=>{
    axios
      .get("/products")
      .then(res => setData(res.data.products))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='home container'>
        <ProductWrapper title={"Mahsulotlar"} data={data}/>
    </section>
  )
}

export default Home


