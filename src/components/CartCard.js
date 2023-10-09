import { useState, useEffect, useContext } from "react"
import { CartContext } from "../context/CartContextProvider"

const CartCard = ({data, showToastMessage}) => {

    const {cartData, setCartData} = useContext(CartContext)

    const [pizzaPrice, setPrice] = useState(data.price)
    const [quantity, setQuantity] = useState(data.quantity);

  useEffect(() => {
    // Update the quantity in the cartData when it changes
    const updatedCartData = cartData.map((item) => {
      if (item.id === data.id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartData(updatedCartData);
  }, [quantity]);

  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const decrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const deleteHandler = () => {
    // Filter out the item with the specified id
    const updatedCartData = cartData.filter((item) => item.id !== data.id);
    setCartData(updatedCartData);
  };
        return (
        <div className="mb-4">
          <div className="d-flex justify-content-center ">
            <div className="col-12 col-md-8 col-lg-6 border rounded-5 p-3 bg-light-subtle">
              <div className="row">
                <div className="col-4 col-md-3">
                  <img
                    src={data.url}
                    alt={data.name}
                    className="img-fluid"
                  />
                </div>

                <div className="col-8 col-md-9">
                    
                    <div className="h4 text-nowrap">{data.name}
                    </div>

                    <div className="row">

                        <div className="col-5">
                        <div className="">Price</div>
                        </div>
                        
                        <div className="col-5 ">
                        <div>$ {data.price} </div>
                        </div>
                
                    </div>

                    <div className="row">
                        <div className="col-5">
                            <div className="">Quantity</div>
                        </div>
                        <div className="col-5">
                            <div className="input-group input-group-sm">
                                <button
                                type="button"
                                className="btn btn-outline-success"
                                style={{ height: 29, width: 29 }}
                                onClick={()=>{incrementHandler(data.quantity)}}
                                >
                                +
                                </button>
                                <input
                                type="number"
                                value={data.quantity}
                                step="1"
                                min="1"
                                max="99"
                                className=" text-center border border-success"
                                />
                                <button
                                type="button"
                                className="btn btn-outline-success"
                                style={{ height: 29, width: 29 }}
                                onClick={()=>{decrementHandler()}}
                                >
                                -
                                </button>
                            </div>
                        </div>

                        <button className="col-1 me-3 btn btn-sm btn-success" onClick={()=>{showToastMessage();deleteHandler(data.id)}}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg> */}
                            X
                        </button>
                        
                    </div>
                
                    <div className="row">
                    <div className="col-5">
                        <div className="">Size</div>
                    </div>
                    <div className="col-5"> 
                        <div className="">{data.size}</div>
                        {/* <div className ="dropdown-toggle " data-bs-toggle="dropdown" role="button" aria-expanded="false" id="selectSize">{data.size}</div> */}
                        {/* <ul className ="dropdown-menu fs-6">
                          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Small</a></li>
                          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Medium</a></li>
                          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Large</a></li>
                          <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Extra Large</a></li>
                        </ul> */}
                    </div>
                    
                    
                    </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }

    export default CartCard