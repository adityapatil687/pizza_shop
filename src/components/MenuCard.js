import { useState, useEffect } from "react"

const MenuCard = ({pizzaMenu}) =>
{
  const [PizzaName, setPizzaName] = useState(pizzaMenu.name)
  const [PizzaUrl, setPizzaUrl] = useState(pizzaMenu.imgURL)
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

    const addToCartHandler = (name, price, url, size) =>
    {
      let data = {name:"", price: null, url: "", size: ""}

      data.name = name
      data.price = price
      data.size = size
      data.url = url

      //isAddedAlready() if true push to local storage
      console.log(data)
    }

    const isAddedAlready=()=>{
        // check local storage
    }
   

  return(
    <div className ="col-lg-4  text-center  " >
  <div className ="mb-5 border rounded bg-light-subtle">
    <img src={pizzaMenu.imgURL} className ="my-2" height="250vw" width="250vw" alt="..." />
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
    <button type="button" className ="btn btn-success col-10 py-2 mb-3" onClick={()=>{addToCartHandler(PizzaName, PizzaPrice, PizzaUrl, selectedSize)}}>Add to cart</button>
  </div>
  </div>
  )
}

export default MenuCard