import styles from "../styles/components/navbar.module.css";
import LogoImg from "../assets/images/logo/waterfall-shop-logo.png";
import Cart from "../assets/images/shopping-bag.png";
import { NavLink } from "react-router";
import Btn from "./Btn";
const Navbar = ({ cart, setToggleCart }) => {
  // total product in the cart
  const cartSize = cart.reduce((acc, cur) => acc + cur.amount, 0);
  const handleCart = (e) => {
    setToggleCart(true);
  };
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.logo}>
          <NavLink to="/">
            <img
              src={LogoImg}
              className={styles.logo__Img}
              alt="Waterfall shop brand logo"
            />
          </NavLink>
        </li>
        <li>
          <ul className={styles.navigationLink}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : "notActive"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : "notActive"
                }
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : "notActive"
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <ul className={styles.others}>
            <li onClick={handleCart} className={styles.others__shoppingCart}>
              <img src={Cart} alt="shopping cart" />{" "}
              <span className={styles.others__shoppingCart__items}>
                {cartSize}
              </span>
            </li>
            <li>Search</li>
            <li>
              <NavLink to="/login">
                <Btn text="Log in" />
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
