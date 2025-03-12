import { useParams } from "react-router";
import { useState } from "react";
import styles from "../styles/page/singleProduct.module.css";
import ProductSize from "../components/ProductSize";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Counter from "../components/Counter";
import CartDetails from "../components/CartDetails";
import Btn from "../components/Btn";
const SingleProduct = ({
  cardData,
  cart,
  setCart,
  toggleCart,
  setToggleCart,
}) => {
  const { id } = useParams();
  const { data, isLoading, isError } = cardData;
  const [amount, setAmount] = useState(1);

  const product = data && data.filter((item) => item.id == id)[0];

  const handleBtn = () => {
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
              <Btn text="ADD TO CART" handleBtn={handleBtn} />
            </div>
            <p className={styles.singleProduct__descriptions}>
              {product && product.description}
            </p>
          </div>
        </div>
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
