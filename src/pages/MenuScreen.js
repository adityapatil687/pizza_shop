import { useState, useEffect } from "react"
import MenuCard from "../components/MenuCard"

const MenuScreen = () => {

    const [pizzaMenu, setPizzaMenu] = useState(
      [
        {
            id:1,
            imgURL: require("../assets/Cheese Margherita.png"),
            name: "Cheese Margherita",
            price: 0.5,
            size: ""
        },
        {
            id:2,
            imgURL: require("../assets/Olive Pizza.png"),
            name: "Olive Pizza",
            price: 1.5,
            size: ""
        },
        {
            id:3,
            imgURL: require("../assets/Pepporoni Pizza.png"),
            name: "Pepperoni Pizza",
            price: 2,
            size: ""
        },
        {   
            id:4,
            imgURL: require("../assets/Pepporoni Vegies.png"),
            name: "Vegies Pizza",
            price: 2.5,
            size: ""
        },
        {
            id:5,
            imgURL: require("../assets/Cheese n Corn.png"),
            name: "Cheese and Corn",
            price: 1.2,
            size: ""
        },
        {
            id:6,
            imgURL: require("../assets/Cheese and Tomato.png"),
            name: "Tomato Pizza",
            price: 1,
            size: ""
        }]
    )
      
    useEffect(()=>{
      let element = document.getElementById('root')
      element.classList.add("my-auto")
  },[])
    return(
      <>
          <div className =" my-5 ">
            <div data-aos="fade-up" data-aos-duration="1000">
            <div className ="row">
            {   pizzaMenu !== null &&
                pizzaMenu.map(( currentIndex) => 
                {
                  return(
                      <MenuCard key={currentIndex.id} pizzaMenu={currentIndex} />
                  )
                }
              )
            }
            </div>
            </div>
          </div>
        
      </>
    )
}

export default MenuScreen;