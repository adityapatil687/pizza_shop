import { cardActionAreaClasses } from "@mui/material"
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/CartContextProvider"

const MenuCard = ({pizzaMenu, showToastMessage}) =>
{

  const {cartData, setCartData} = useContext(CartContext)

  const [PizzaName, setPizzaName] = useState(pizzaMenu.name)
  const [PizzaUrl, setPizzaUrl] = useState(pizzaMenu.url)
  const [PizzaPrice, setPrice] = useState(pizzaMenu.price)

  const [selectedSize,setSelectedSize] = useState("Small") // default selected size

  
  

  useEffect(()=>
  {
    if (selectedSize == "Small")
    {
      setPrice(pizzaMenu.price)
    }
    else if (selectedSize == "Medium")
    {
      setPrice(pizzaMenu.price + 2)
    }
    else if (selectedSize == "Large")
    {
      setPrice(pizzaMenu.price + 4)
    }
    else if (selectedSize == "Extra Large")
    {
      setPrice(pizzaMenu.price + 6)
    }
  },[selectedSize])

    const selectSizeHandler = (e) => 
    {
      setSelectedSize(e.target.text)
    }

    const addToCartHandler = () =>
    {
      showToastMessage()
      // Create a new pizza object with size information
      const pizzaToAdd = {
        id: pizzaMenu.id,
        name: pizzaMenu.name,
        price: PizzaPrice,
        url: pizzaMenu.url,
        size: selectedSize, // Add the selected size
      };

      // Check if the pizza with the same id and size already exists in cartData
      const existingPizzaIndex = cartData.findIndex((item) =>
        item.id === pizzaToAdd.id && item.size === pizzaToAdd.size
      );

      if (existingPizzaIndex !== -1) {
        // If the pizza with the same id and size already exists, update its quantity instead of adding a new one
        const updatedCartData = [...cartData];
        updatedCartData[existingPizzaIndex].quantity += 1;
        setCartData(updatedCartData);
      } else {
        // If it doesn't exist, add the new pizza to cartData
        setCartData([...cartData, { ...pizzaToAdd, quantity: 1 }]);
      }
    }

  return(
    <div className ="col-lg-4  text-center  " >
  <div className ="mb-5 border rounded bg-light-subtle">
    <img src={pizzaMenu.url} className ="my-2" height="250vw" width="250vw" alt="..." />
    <div className ="row mx-4">
      <div className ="col py-1 text-start">
        <p>{PizzaName}</p>
      </div>
      <div className ="col py-1 text-end">
        <p>${PizzaPrice}</p>
      </div>
    </div>
    <div className ="row mx-4">
      <div className ="col py-1 text-start">
        <p>Size</p>
      </div>
      <div className ="col py-1 text-end">
        <div className ="dropdown-toggle " data-bs-toggle="dropdown" role="button" aria-expanded="false" id="selectSize">{selectedSize}</div>
        <ul className ="dropdown-menu fs-6">
          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Small</a></li>
          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Medium</a></li>
          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Large</a></li>
          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Extra Large</a></li>
        </ul>
      </div>
    </div>
    
      <button type="button" className ="btn btn-success col-10 py-2 mb-3" onClick={()=>{addToCartHandler()}}>Add to cart</button>
    
    
  </div>
  </div>
  )
}

export default MenuCard