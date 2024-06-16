import { useState, useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const CartCard = ({ data, showToastMessage, listId }) => {
  const { cartData, setCartData } = useContext(CartContext);
  const [quantity, setQuantity] = useState(data.quantity);

  const updateQuantity = (newQuantity) => {
    if (listId >= 0 && listId < cartData.length) {
      const updatedCartData = [...cartData];
      updatedCartData[listId].quantity = newQuantity;
      setCartData(updatedCartData); // Update the cartData with the new array
    }
  };

  const deleteHandler = () => {
    const updatedCartData = [
      ...cartData.slice(0, listId),
      ...cartData.slice(listId + 1),
    ];
    setCartData(updatedCartData);
    showToastMessage("Removed from cart");
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
    }
  };

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-center">
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
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      step="1"
                      min="1"
                      max="99"
                      className="text-center border border-success"
                      readOnly
                    />
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      style={{ height: 29, width: 29 }}
                      onClick={decrementQuantity}
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
