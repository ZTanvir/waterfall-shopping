import Btn from "./Btn";
import styles from "../styles/components/cartWrapper.module.css";
import deleteIcon from "../assets/images/delete-button.png";

const CartDetails = ({ cart, setCart, toggleCart, setToggleCart }) => {
  // Sum of all product price
  const total = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.amount * currentValue.price,
    0
  );
  // Remove product from cart
  const handleRemoveProduct = (e) => {
    console.log(e.currentTarget.dataset.id);
    const itemId = Number(e.currentTarget.dataset.id);
    const filterProduct = cart.filter((product) => product.id !== itemId);
    console.log(filterProduct);
    setCart(filterProduct);
  };
  const handleCheckOutBtn = (e) => {};
  // Hide slide window
  const handleCartToggle = (e) => {
    setToggleCart(false);
  };

  const showOrHideCart = toggleCart ? styles.showCart : styles.hideCart;

  return (
    <div className={`${styles.cartContainer} ${showOrHideCart}`}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <span
        title="Close"
        className={styles.hideCartIcon}
        onClick={handleCartToggle}
      >
        <img src={deleteIcon} alt="delete icon" />
      </span>
      {cart.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            {cart.map((item) => (
              <section className={styles.productContainer} key={item.id}>
                <div className={styles.productImgAmount}>
                  <img
                    className={styles.productImg}
                    src={item.image}
                    alt={item.description}
                  />
                  <span className={styles.productAmount}>{item.amount}</span>
                </div>
                <div className={styles.productTitlePrice}>
                  <p className={styles.productTitle}>{item.title}</p>
                  <p className={styles.productPrice}>
                    {item.amount} × ${item.price}
                  </p>
                </div>
                <div
                  onClick={handleRemoveProduct}
                  data-id={item.id}
                  title="Remove product"
                  className={styles.removeProductIcon}
                >
                  <img src={deleteIcon} alt="delete icon" />
                </div>
              </section>
            ))}
          </div>
          <div className={styles.totalPriceContainer}>
            <span>Subtotal:</span>
            <span className={styles.totalPrice}>${total.toFixed(2)}</span>
          </div>
          <a className={styles.checkoutLink} href="/checkout">
            <Btn text="CHECKOUT" handleBtn={handleCheckOutBtn} />
          </a>
        </>
      ) : (
        <>
          <p>No items in the cart yet.</p>
          <p>Please add items from the shop page.</p>
        </>
      )}
    </div>
  );
};
export default CartDetails;
