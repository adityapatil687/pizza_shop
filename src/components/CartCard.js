import { useState, useEffect } from "react"
const CartCard = ({data}) => {

    const [pizzaPrice, setPrice] = useState(data.price)
    const [selectedSize,setSelectedSize] = useState(data.size)
    const [quantity, setQuantity] = useState(1)

    const [total, setTotal] = useState(0)

      const selectSizeHandler = (e) => 
      {
        setSelectedSize(e.target.text)
      }

      const incrementHandler = () =>
      {
        let count = quantity
        count++
        setQuantity((count))
        //incrementLocalStorageHandler()
      }

      const incrementLocalStorageHandler = () =>
      {
        let localStorageCount = JSON.parse(localStorage.getItem("cartLength"))
        localStorageCount = localStorageCount + 1
        localStorage.setItem('cartLength', localStorageCount)
      }

      const decrementHandler = () =>
      {
        let count = quantity
        count--
        if(count>=1)
        {
          setQuantity((count))
         // decrementLocalStorageHandler()
        }
        else
        {
          alert("Quantity Cannot be zero. You can delete item instead")
        }
      }

      const decrementLocalStorageHandler = () =>
      {
        let localStorageCount = JSON.parse(localStorage.getItem("cartLength"))
        if(localStorageCount>0)
        {
          localStorageCount = localStorageCount - 1
          localStorage.setItem('cartLength', localStorageCount)
        }
      }

      const deleteHandler = () =>
      {

      }

      useEffect(()=>
      {
        if (selectedSize == "Small")
        {
          setPrice(data.price)
        }
        else if (selectedSize == "Medium")
        {
          setPrice(data.price + 2)
        }
        else if (selectedSize == "Large")
        {
          setPrice(data.price + 4)
        }
        else if (selectedSize == "Extra Large")
        {
          setPrice(data.price + 6)
        }
      },[selectedSize])

    return (
        <div className="mb-4">
          <div className="d-flex justify-content-center ">
            <div className="col-12 col-md-8 col-lg-6 border rounded-5 p-3 bg-light-subtle">
              <div className="row">
                <div className="col-4 col-md-3">
                  <img
                    src={data.imgURL}
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
                        <div>$ {pizzaPrice} </div>
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
                                onClick={()=>{incrementHandler()}}
                                >
                                +
                                </button>
                                <input
                                type="number"
                                value={quantity}
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

                        <button className="col-1 me-3 btn btn-sm btn-success">
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
                        
                    <div className ="dropdown-toggle " data-bs-toggle="dropdown" role="button" aria-expanded="false" id="selectSize">{selectedSize}</div>
                        <ul className ="dropdown-menu fs-6">
                        <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Small</a></li>
                        <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Medium</a></li>
                        <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Large</a></li>
                        <li><a className ="dropdown-item"  onClick={(e)=>{selectSizeHandler(e)}}>Extra Large</a></li>
                        </ul>
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