import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { Home } from '../Pages/Home'
import { Products } from '../Pages/Products'
import JoinUs from '../Pages/JoinUs'
import About from '../Pages/About'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/signup' element={<JoinUs />} />
        </Routes>
    </>
  )
}

export default AllRoutes