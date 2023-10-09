import React, { useState, useEffect, useContext } from "react"
import MenuCard from "../components/MenuCard"
import { CartContext } from "../context/CartContextProvider"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuScreen = () => {
  const [showToast, setShowToast] = useState(false);
    const [pizzaMenu, setPizzaMenu] = useState(
      [
        {
            id:1,
            url: require("../assets/Cheese Margherita.png"),
            name: "Cheese Margherita",
            price: 0.5,
            size: ""
        },
        {
            id:2,
            url: require("../assets/Olive Pizza.png"),
            name: "Olive Pizza",
            price: 1.5,
            size: ""
        },
        {
            id:3,
            url: require("../assets/Pepporoni Pizza.png"),
            name: "Pepperoni Pizza",
            price: 2,
            size: ""
        },
        {   
            id:4,
            url: require("../assets/Pepporoni Vegies.png"),
            name: "Vegies Pizza",
            price: 2.5,
            size: ""
        },
        {
            id:5,
            url: require("../assets/Cheese n Corn.png"),
            name: "Cheese and Corn",
            price: 1.2,
            size: ""
        },
        {
            id:6,
            url: require("../assets/Cheese and Tomato.png"),
            name: "Tomato Pizza",
            price: 1,
            size: ""
        }]
    )
   
    const {cartData, setCartData} = useContext(CartContext)

   

    useEffect(()=>{
      console.log(cartData)
    },[cartData])

    useEffect(()=>{
      let element = document.getElementById('root')
      element.classList.add("my-auto")
  },[])
  const showToastMessage = () => {
    toast.success('Added to cart', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'border rounded bg-light-subtle text-light-emphasis',
        autoClose: 1000,
        pauseOnHover: false,
        transition: Slide,
        progressStyle: {backgroundColor: "#198754"},
        icon: false,
        bodyClassName: 'bg-light-subtle',
    });
};
    return(
      <>
          <div className =" my-5 ">
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className ="row">
            {   pizzaMenu !== null &&
                pizzaMenu.map(( currentIndex) => 
                {
                  return(
                      <MenuCard key={currentIndex.id} pizzaMenu={currentIndex} showToastMessage={showToastMessage}/>
                  )
                }
              )
            }
            </div>
            </div>
          </div>
        <ToastContainer />
      </>
    )
}

export default MenuScreen;