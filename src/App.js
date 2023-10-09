import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, NavLink, Outlet} from 'react-router-dom'
import ReactDOM from 'react-dom';

import './App.css';

import Navbar from './components/Navbar';
import MenuScreen from "./pages/MenuScreen";
import  HomeScreen  from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import CartScreen from './pages/CartScreen';


function App()
{
  const [cartData, setCartData] = useState([])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout cartData={cartData} />}>
        {/* outlet */}
          <Route index element={<HomeScreen />} />
          <Route path="menu" element={<MenuScreen cartData={cartData} setCartData={setCartData} />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="cart" element={<CartScreen cartData={cartData} setCartData={setCartData} />} />
        {/* outlet */}
      </Route>
    )
  )

  return(
      <RouterProvider router={router} />
    );
  }
export default App;


// RouterLayout and Component
const RootLayout = ({cartData}) =>
{
  return(
    <>
      {ReactDOM.createPortal(<Navbar cartData={cartData} />, document.getElementById('navbar-container'))}
      <Outlet />
    </>
  )
}

