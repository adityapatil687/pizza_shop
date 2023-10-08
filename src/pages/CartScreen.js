import {useState, useEffect} from "react";
import "./CartScreen.css"
import { json } from "react-router-dom";
import { Button } from "@mui/material";
import CartCard from "../components/CartCard";
import Checkout from "../components/Checkout";
import ReactDOM from "react-dom";


const CartScreen = () => {
   
    const [cartData, setCartData] = useState(null)
    const [total, setTotal] = useState(0)
    
    useEffect(()=>{
        let element = document.getElementById('root')
        element.classList.remove("my-auto")

        setCartData([
            {
                id:1,
                imgURL: require("../assets/Cheese Margherita.png"),
                name: "Cheese Margherita",
                price: 0.5,
                size: "Medium"
            },
            {
                id:2,
                imgURL: require("../assets/Olive Pizza.png"),
                name: "Olive Pizza",
                price: 1.5,
                size: "Small"
            },
            {
                id:3,
                imgURL: require("../assets/Pepporoni Pizza.png"),
                name: "Pepperoni Pizza",
                price: 2,
                size: "Small"
            },
            {   
                id:4,
                imgURL: require("../assets/Pepporoni Vegies.png"),
                name: "Vegies Pizza",
                price: 2.5,
                size: "Small"
            },
            {
                id:5,
                imgURL: require("../assets/Cheese n Corn.png"),
                name: "Cheese and Corn",
                price: 1.2,
                size: "Small"
            },
            {
                id:6,
                imgURL: require("../assets/Cheese and Tomato.png"),
                name: "Tomato Pizza",
                price: 1,
                size: "Small"
            }
        ])
        
    },[])

    
 
    return (
        <>
        <div className="cart-screen" data-aos="fade-up" data-aos-duration="1000">
            <div className="cart-items">
                {
                (cartData !== null && cartData.length> 0) ?
                cartData.map((currentIndex) => {
                    return <CartCard key={currentIndex.id} data={currentIndex} />;
                })
                :
                (
                    <p className="text-center">Your cart is empty</p>
                )}
            </div>
            
        </div>
            {ReactDOM.createPortal(<Checkout total={total}/>, document.getElementById("footer"))}
        </>
      );
}
 
export default CartScreen;


