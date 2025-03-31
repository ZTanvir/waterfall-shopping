import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import ProductCard from "../components/ProductCard";
import CartDetails from "../components/CartDetails";
import { Link } from "react-router";
import styles from "../styles/page/home.module.css";
import helperFunction from "../utils/helperFunction";
import { useState } from "react";

const Home = ({ cardData, cart, setCart }) => {
  const { data, isLoading, isError } = cardData;
  const [toggleCart, setToggleCart] = useState(false);

  // Get a single product from all the products
  const getSingleCardData = helperFunction.getRandomItems(data);

  return (
    <div className={styles.homepage}>
      <header>
        <Navbar cart={cart} setToggleCart={setToggleCart} />
      </header>
      <main>
        <section className={styles.about}>
          <h1 className={styles.title}>
            The most <span className={styles.underline}>beautiful</span> and
            <span className={styles.underline}> high-quality</span> products in
            the whole world.
          </h1>
          <p className={styles.subtitle}>
            Shop the latest trends and must-have products from the comfort of
            your home. Fast shipping and amazing customer service guaranteed.
          </p>
          <Link className={styles.shopPageLink} to="/shop">
            <Btn text="Explore Now" />
          </Link>
        </section>
        <div className={styles.singleDemoProduct}>
          <ProductCard
            product={getSingleCardData}
            isLoading={isLoading}
            isError={isError}
          />
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
export default Home;
