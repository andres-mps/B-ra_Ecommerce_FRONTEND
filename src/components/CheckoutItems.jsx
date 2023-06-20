function CheckoutItems({ beer }) {
  return (
    <>
      <div>
        <div className="checkout-product-photo-container">
          <img src={beer} alt="" className="checkout-product-photo" />
          <span className="checkout-product-span">1</span>
        </div>
      </div>
      <p>kr 36.00</p>
    </>
  );
}
export default CheckoutItems;
