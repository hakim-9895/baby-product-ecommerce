import React, { useCallback, useState } from 'react'
import Navebar from './Navebar'
import Heropage from './Heropage'
import Buttons from './Buttons'

import Products from './Products'
import Productprovider from './Productprovider'
import Cart from './Cart'
import { ToastContainer } from 'react-toastify'
import Footer from './Footer'


function Home() {
const [ismodalopen , setmodalIsopen]=useState(false)

const toggleModal=useCallback(()=>{
  setmodalIsopen((prevopen)=>!prevopen)
},[])


  return (
    <div>
      <Productprovider>

      <Navebar toggleModal={toggleModal}/>
      <Heropage/>
      <Buttons/>
      <Products/>
       <Cart    isOpen={ismodalopen} onClose={toggleModal}/> 
       <Footer/>
       

      </Productprovider>
      
    </div>
  )
}

export default Home
