import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { CartPage, HomePage,   Login,   ProductDetails, ProductList, Register } from '../pages'

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="cart" element={<CartPage />} />
        
        </Routes>
    </>
  )
}