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
    <nav className={styles.navbar}>
      <input type="checkbox" id={styles.showNavBar} />
      <label htmlFor={styles.showNavBar} className={styles.openBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#F19E39"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <ul className={styles.navItems}>
        <label htmlFor={styles.showNavBar} className={styles.closeBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#F19E39"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>
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
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
