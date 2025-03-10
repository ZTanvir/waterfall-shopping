import Btn from "./Btn";
const CartDetails = ({ cart }) => {
  const handleCheckOutBtn = (e) => {};
  return (
    <div>
      <h2>Cart</h2>
      <div></div>
      <Btn text="CHECKOUT" handleBtn={handleCheckOutBtn} />
    </div>
  );
};
export default CartDetails;
