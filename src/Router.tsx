import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/login/Login'
import OrderPage from './page/order/OrderPage'
import ErrorPage from './page/error/ErrorPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' Component={ErrorPage}/>
        <Route path='/' Component={Login}/>
        <Route path='/order' Component={OrderPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router