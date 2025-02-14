import styles from "../styles/page/shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";
import SearchField from "../components/SearchField";
import ProductCategories from "../components/ProductCategories";
import { useEffect, useState } from "react";

const Shop = ({ cardData }) => {
  const [products, setProducts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, isError } = cardData;

  // use effect dependency variable
  const dependency = data === undefined ? data : data.length;

  // update product when new items added to data
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [dependency]);

  // filter product that match searchText
  useEffect(() => {
    if (searchText) {
      const filterProduct = data.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filterProduct);
    } else {
      // set product to initial state
      setProducts(data);
    }
  }, [searchText]);

  return (
    <div className={styles.shopPage}>
      <header>
        <Navbar />
      </header>
      <main>
        <aside>
          <SearchField
            text={searchText}
            setText={setSearchText}
            placeHolder="Search products.."
          />
          <ProductCategories setProduct={setProducts} />
        </aside>
        <ProductCards
          products={products}
          isLoading={isLoading}
          isError={isError}
        />
      </main>
      <Footer />
    </div>
  );
};
export default Shop;
