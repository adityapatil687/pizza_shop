import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  NavLink,
  Outlet,
} from "react-router-dom";
import ReactDOM from "react-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import MenuScreen from "./pages/MenuScreen";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import CartScreen from "./pages/CartScreen";
import ProfileScreen from "./pages/Profile";

import Signup from "./pages/Signup";


function App() {
  const [cartData, setCartData] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* outlet */}
        <Route index element={<HomeScreen />} />
        <Route path="menu" element={<MenuScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<CartScreen />} />
        <Route path="profile" element={<ProfileScreen />} />
        {/* outlet */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
export default App;

// RouterLayout and Component
const RootLayout = ({ cartData }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Navbar cartData={cartData} />,
        document.getElementById("navbar-container")
      )}
      <Outlet />
    </>
  );
};
