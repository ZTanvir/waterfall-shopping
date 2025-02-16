import styles from "../styles/page/shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";
import SearchField from "../components/SearchField";
import ProductCategories from "../components/ProductCategories";
import SortFilter from "../components/SortFilter";
import { useEffect, useState } from "react";

const Shop = ({ cardData }) => {
  const [products, setProducts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, isError } = cardData;
  console.log("shop page");

  // use effect dependency variable
  const dependency = data && data.length;

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
        <div>
          <SortFilter products={products} setProducts={setProducts} />
          <ProductCards
            products={products}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Shop;
