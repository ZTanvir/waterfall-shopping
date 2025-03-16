import styles from "../styles/components/cartProducts.module.css";

const CartProducts = ({ cart }) => {
  // Sum of all product price
  const total = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.amount * currentValue.price,
    0
  );
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Cart</h2>

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
              </section>
            ))}
          </div>
          <div className={styles.totalPriceContainer}>
            <span>Subtotal:</span>
            <span className={styles.totalPrice}>${total.toFixed(2)}</span>
          </div>
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
export default CartProducts;
