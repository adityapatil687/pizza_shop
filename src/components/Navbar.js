import { useEffect, useState, useContext } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn"
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const Navbar = () => {

  const {cartData, setCartData} = useContext(CartContext)

    return(
        <div className="container-fluid">
          <a className="navbar-brand"># pizza</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-lg-1 ">
                {
                  <NavLink to="/"className="nav-link" aria-current="Home" > 
                    Home
                  </NavLink>
                }
                
              </li>
              <li className="nav-item mx-lg-1">
                {
                  <NavLink className="nav-link" aria-current="Menu" to="menu"> 
                          Menu
                  </NavLink>
                }
              </li>
              <li className="nav-item mx-lg-1">
                {
                  <NavLink className="nav-link" aria-current="Login" to="login">
                    Login
                  </NavLink>
                }
                
              </li>
              <li className="nav-item mx-lg-1">
                {
                  <NavLink className="nav-link " aria-current="Cart" to="cart">
                    Cart
                    <span className="badge bg-secondary bg-success mx-lg-1">
                      {cartData.length > 0 && (
                        cartData.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
                     )}
                    </span>
                  </NavLink>
                }
              </li>
            </ul>

                  
            <ThemeToggleBtn />
            
          </div>
        </div>
  
    )
  }

  export default Navbar;