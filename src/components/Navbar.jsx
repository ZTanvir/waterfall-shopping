import styles from "../styles/components/navbar.module.css";
import LogoImg from "../assets/images/logo/waterfall-shop-logo.png";
import Cart from "../assets/images/shopping-bag.png";
import { Link } from "react-router";
import Btn from "./Btn";
const Navbar = ({ cartItems = 10 }) => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.logo}>
          <Link to="/">
            <img
              src={LogoImg}
              className={styles.logo__Img}
              alt="Waterfall shop brand logo"
            />
          </Link>
        </li>
        <li>
          <ul className={styles.navigationLink}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className={styles.others}>
            <li className={styles.others__shoppingCart}>
              <img src={Cart} alt="shopping cart" />{" "}
              <span className={styles.others__shoppingCart__items}>
                {cartItems}
              </span>
            </li>
            <li>Search</li>
            <li>
              <Link to="/login">
                <Btn text="Log in" />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
