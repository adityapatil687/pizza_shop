const Checkout = ({total}) =>
{
 return(
    <>
        <div className="checkout-container">
      <div className="cart-summary bg-light-subtle border">
        <div className="total">Total: $ {total}</div>
        <button variant="contained" color="primary" className="btn btn-success">
          Checkout
        </button>
      </div>
    </div>
    </>
 )
}

export default Checkout;