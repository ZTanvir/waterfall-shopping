import styles from "../styles/components/navbar.module.css";
import LogoImg from "../assets/images/logo/waterfall-shop-logo.png";
import Cart from "../assets/images/shopping-bag.png";
const Navbar = ({ cartItems = 10 }) => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.logo}>
          <img src={LogoImg} alt="Waterfall shop brand logo" />
        </li>
        <li>
          <ul className={styles.navigationLink}>
            <li>Home</li>
            <li>Shop</li>
            <li>Contacts</li>
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
            <li>Log in</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
