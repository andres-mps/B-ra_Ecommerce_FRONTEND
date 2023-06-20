function CheckoutItems({ beer }) {
  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <div className="checkout-product-photo-container">
          <img src={beer} alt="" className="checkout-product-photo" />
          <span className="checkout-product-span">1</span>
        </div>
        <p className="checkout-regular-text fw-bold">Action Direct</p>
      </div>
      <p>kr 36.00</p>
    </>
  );
}
export default CheckoutItems;
