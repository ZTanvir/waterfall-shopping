import styles from "../styles/components/navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <ul className="">
        <li>WaterfallShop</li>
        <li>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Contacts</li>
          </ul>
        </li>
        <li>
          <ul>
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
