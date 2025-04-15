import { useParams } from "react-router";
import { useRef, useState } from "react";
import styles from "../styles/page/singleProduct.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Counter from "../components/Counter";
import CartDetails from "../components/CartDetails";
import CartProducts from "../components/CartProducts";
import closeIcon from "../assets/images/cross.png";
import Btn from "../components/Btn";

const SingleProduct = ({ cardData, cart, setCart }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = cardData;
  const [amount, setAmount] = useState(1);
  const [toggleCart, setToggleCart] = useState(false);
  const addToCartModalRef = useRef(null);

  const openAddToCartModal = () => addToCartModalRef.current.showModal();
  const closeAddToCartModal = () => addToCartModalRef.current.close();
  const handleCloseCartModal = () => {
    closeAddToCartModal();
  };
  // close the modal when click outside the modal content
  const handleCartModal = (e) => {
    const dialogDimension = addToCartModalRef.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimension.x ||
      e.clientX > dialogDimension.right ||
      e.clientY < dialogDimension.y ||
      e.clientY > dialogDimension.bottom
    ) {
      closeAddToCartModal();
    }
  };

  const product = data && data.filter((item) => item.id == id)[0];

  const handleAddToCartBtn = () => {
    let updateProduct = { ...product };
    // check does the item is already in cart
    if (cart.length > 0) {
      const searchProduct = cart.filter((item) => item.id === updateProduct.id);
      if (searchProduct.length > 0) {
        // update product amount in the card which match the search result
        const updatedCart = cart.map((item) => {
          if (item.id === updateProduct.id) {
            item["amount"] = Number(amount) + Number(item["amount"]);
          }
          return item;
        });
        // add products to cart
        setCart(updatedCart);
      } else if (searchProduct.length === 0) {
        // product not found in cart cause it is a new product
        // modify product by adding amount with product object
        updateProduct["amount"] = Number(amount);
        // add product to cart
        setCart([...cart, updateProduct]);
      }
    } else if (cart.length === 0) {
      // when no items in cart
      // modify product by adding amount with product object
      updateProduct["amount"] = Number(amount);
      // add product to cart
      setCart([updateProduct]);
    }
    // show item has added to cart in modal
    openAddToCartModal();
  };

  if (isLoading)
    return (
      <div className={styles.loader__container}>
        <Loading />
      </div>
    );
  return (
    <div className={styles.singleProductPage}>
      <header>
        <Navbar cart={cart} setToggleCart={setToggleCart} />
      </header>
      <main>
        <div className={styles.singleProduct__wrapper}>
          <img
            className={styles.singleProduct__img}
            src={product.image}
            alt=""
          />
          <div className={styles.singleProduct__details}>
            <h1 className={styles.singleProduct__title}>
              {product && product.title}
            </h1>
            <p className={styles.singleProduct__price}>
              <span className={styles.singleProduct__price__title}>
                Price :
              </span>
              {product && `$${product.price}`}
            </p>
            <div className={styles.singleProduct__action}>
              <Counter amount={amount} setAmount={setAmount} />
              <Btn text="ADD TO CART" handleBtn={handleAddToCartBtn} />
            </div>
            <p className={styles.singleProduct__descriptions}>
              {product && product.description}
            </p>
          </div>
        </div>
        <dialog
          ref={addToCartModalRef}
          onClick={handleCartModal}
          className={styles.cartModal}
        >
          <div className={styles.cartModalHeader}>
            <h2 className={styles.cartModalTitle}>You have just added</h2>
            <button
              onClick={handleCloseCartModal}
              className={styles.cartModalCloseBtn}
            >
              <img src={closeIcon} alt="Red circle with cross mark on it" />
            </button>
          </div>
          <CartProducts cart={cart} />
        </dialog>
      </main>
      <CartDetails
        cart={cart}
        setCart={setCart}
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
      />
      <Footer />
    </div>
  );
};
export default SingleProduct;
