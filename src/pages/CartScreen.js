import {useState, useEffect, useContext} from "react";
import "./CartScreen.css"
import { json } from "react-router-dom";
import { Button } from "@mui/material";
import CartCard from "../components/CartCard";
import Checkout from "../components/Checkout";
import ReactDOM from "react-dom";
import { CartContext } from "../context/CartContextProvider";
import {Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartScreen = () => {

    const {cartData, setCartData} = useContext(CartContext)

    const [total, setTotal] = useState(0)
    const [showToast, setShowToast] = useState(false);

    useEffect(()=>{
            let element = document.getElementById('root')
            element.classList.remove("my-auto")
            console.log(cartData)

            let pageTitle = document.getElementById('pageTitle')
            pageTitle.innerHTML='Cart'
    },[])


    useEffect(() => {
        // Calculate the total based on the updated cartData
        const newTotal = cartData.reduce(
          (acc, curr) => acc + Number(curr.price) * curr.quantity,
          0
        );
        setTotal(newTotal);
        
      }, [cartData]);

    const deleteHandler = (id) =>
    {
        
        const updatedCartData = cartData.filter((obj) => obj.id !== id);
        setCartData(updatedCartData);
    }
    
    
    const showToastMessage = () => {
        toast.success('Removed from cart', {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'border rounded bg-light-subtle text-light-emphasis mb-5',
            autoClose: 1000,
            pauseOnHover: false,
            transition: Slide,
            progressStyle: {backgroundColor: "#198754"},
            icon: false,
            bodyClassName: 'bg-light-subtle',
        });
    };
    return (
        <>
        <div className="cart-screen" data-aos="fade-up" data-aos-duration="1000">
            <div className="cart-items">
                {
                (cartData !== null && cartData.length> 0) ?
                cartData.map((obj) => {
                    return <CartCard key={obj.id} data={obj}  deleteHandler={deleteHandler} showToastMessage={showToastMessage} />;
                })
                :
                (
                    <p className="text-center">Your cart is empty</p>
                )}
            </div>
            
        </div>
            <ToastContainer />
            {ReactDOM.createPortal(<Checkout total={total}/>, document.getElementById("footer"))}
        </>
      );
}
 
export default CartScreen;


