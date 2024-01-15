import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/home';
import Order from './pages/order/order';
import Cart from './pages/cart/cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/*" element={<NoPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

