import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const HomeScreen = () => {
  useEffect(()=>{
    let element = document.getElementById('root')
    element.classList.add("my-auto")
},[])
  return (
    <div className="row" data-aos="fade-up" data-aos-duration="1000">
      <div className="col d-flex align-items-center">
        <div className="text-start">
          <h1 className="display-3 text-sm">Welcome to Pizza Place</h1>
          <p style={{fontSize: 30, fontWeight: "normal", color: "grey"}} className="mt-5 ">it's all good : )</p>
        </div>
      </div>

      <div className="col d-flex align-items-center justify-content-end">
        <img
          src={require('../assets/Cheese Margherita.png')}
          alt="Delicious Pizza"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
