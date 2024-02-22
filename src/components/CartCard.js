import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const CartCard = ({ data, showToastMessage }) => {
  const { cartData, setCartData } = useContext(CartContext);

  const [quantity, setQuantity] = useState(data.quantity);

  useEffect(() => {
    const updatedCartData = cartData.map((item) => {
      if (item.id === data.id && item.size === data.size) {
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
    const updatedCartData = cartData.filter(
      (item) => item.id !== data.id || item.size !== data.size
    );
    setCartData(updatedCartData);
  };

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-center ">
        <div className="col-12 col-md-8 col-lg-6 border rounded-5 p-3 bg-light-subtle">
          <div className="row">
            <div className="col-4 col-md-3">
              <img src={data.url} alt={data.name} className="img-fluid" />
            </div>

            <div className="col-8 col-md-9">
              <div className="h4 text-nowrap">{data.name}</div>

              <div className="row">
                <div className="col-5">
                  <div className="">Price</div>
                </div>

                <div className="col-5 ">
                  <div>₹ {data.price}</div>
                </div>
              </div>

              <div className="row">
                <div className="col-5">
                  <div className="">Size</div>
                </div>

                <div className="col-5 ">
                  <div>{data.size}</div>
                </div>
                <button
                  className="col-1 me-3 btn btn-sm btn-success"
                  onClick={deleteHandler}
                >
                  X
                </button>
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
                      onClick={incrementHandler}
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
                      onClick={decrementHandler}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
