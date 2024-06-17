import React, { useState, useEffect, useContext } from "react";
import MenuCard from "../components/MenuCard";
import { CartContext } from "../context/CartContextProvider";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import PizzaMenu from "../data/data";
import axios from "axios";


const MenuScreen = () => {
  const [showToast, setShowToast] = useState(false);
const endpoint = "https://3wx7xxkx55.execute-api.ap-south-1.amazonaws.com/dev/menu"
  // const [pizzaMenu, setPizzaMenu] = useState(PizzaMenu);
  const [pizzaMenu, setPizzaMenu] = useState(null);
  const { cartData, setCartData } = useContext(CartContext);

  useEffect(() => {
    console.log(pizzaMenu);
  }, [pizzaMenu]);

  //useEffect(())
  useEffect(() => {
    let element = document.getElementById("root");
    element.classList.add("my-auto");

    let pageTitle = document.getElementById("pageTitle");
    pageTitle.innerHTML = "Menu";

   // Make GET request to localhost/menu using Axios
    axios.get(endpoint)
        .then(response => {
            // Assuming the response data is an array similar to your PizzaMenu
            setPizzaMenu(response.data);
        })
        .catch(error => {
            console.error('Error fetching menu:', error);
        });
  }, []);
  const showToastMessage = () => {
    toast.success("Added to cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "border rounded bg-light-subtle text-light-emphasis",
      autoClose: 1000,
      pauseOnHover: false,
      transition: Slide,
      progressStyle: { backgroundColor: "#198754" },
      icon: false,
      bodyClassName: "bg-light-subtle",
    });
  };
  return (
    <>
      <div className=" my-5 ">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            {pizzaMenu !== null &&
              pizzaMenu.map((currentIndex) => {
                return (
                  <MenuCard
                    key={currentIndex.id}
                    pizzaMenu={currentIndex}
                    showToastMessage={showToastMessage}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MenuScreen;
