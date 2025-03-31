import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopOwnerCards from "../components/ShopOwnerCards";
import userService from "../services/users";
import Loading from "../components/Loading";
import CartDetails from "../components/CartDetails";
import styles from "../styles/page/contacts.module.css";
import { useState } from "react";

const Contacts = ({ cart, setCart }) => {
  const { data, isLoading, isError } = userService.getAllUsers();
  const [toggleCart, setToggleCart] = useState(false);

  if (isLoading)
    return (
      <div className={styles.loadingContainer}>
        <Loading />
      </div>
    );
  return (
    <div className={styles.contacts__page}>
      <header>
        <Navbar cart={cart} setToggleCart={setToggleCart} />
      </header>
      <main>{data && <ShopOwnerCards cardsData={data} />}</main>
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
export default Contacts;
