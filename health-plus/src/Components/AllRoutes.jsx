import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { Home } from '../Pages/Home'
import { Products } from '../Pages/Products'
import JoinUs from '../Pages/JoinUs'
import About from '../Pages/About'
import MyProfile from './MyProfile'
import ProductsDetails from './ProductsDetails'
import Admin from '../Pages/AdminPage/Admin'
import Cart from './Cart'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/signup' element={<JoinUs />} />
            <Route path='/admin' element={<Admin />}/>
            <Route path='/products/:id' element={<ProductsDetails />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </>
  )
}

export default AllRoutes