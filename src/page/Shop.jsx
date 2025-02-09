import styles from "../styles/page/shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
const Shop = ({ cardData }) => {
  const [products, setProducts] = useState(null);
  const { data, isLoading, isError } = cardData;

  const dependency = data === undefined ? data : data.length;

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [dependency]);

  return (
    <div className={styles.shopPage}>
      <header>
        <Navbar />
      </header>
      <main></main>
      <Footer />
    </div>
  );
};
export default Shop;
