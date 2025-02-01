import styles from "../styles/components/navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.logo}>WaterfallShop</li>
        <li>
          <ul className={styles.navigationLink}>
            <li>Home</li>
            <li>Shop</li>
            <li>Contacts</li>
          </ul>
        </li>
        <li>
          <ul className={styles.others}>
            <li>Cart</li>
            <li>Search</li>
            <li>Log in</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
