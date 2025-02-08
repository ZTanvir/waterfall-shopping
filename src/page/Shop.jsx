import styles from "../styles/page/shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Shop = () => {
  return (
    <div className={styles.shopPage}>
      <header>
        <Navbar />
      </header>
      <Footer />
    </div>
  );
};
export default Shop;
