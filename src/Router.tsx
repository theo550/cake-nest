import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/login/Login'
import OrderPage from './page/order/OrderPage'
import ErrorPage from './page/error/ErrorPage'
import Layout from './components/layout/header/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' Component={ErrorPage}/>
        <Route path='/' Component={Login}/>
        <Route element={<Layout/>}>
          <Route path='/order' Component={OrderPage}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router