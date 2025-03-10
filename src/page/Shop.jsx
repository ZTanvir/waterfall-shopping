import styles from "../styles/page/shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";
import ProductCategories from "../components/ProductCategories";
import SortFilter from "../components/SortFilter";
import SearchFilter from "../components/SearchFilter";
import { useEffect, useState } from "react";

const Shop = ({ cardData, cart }) => {
  const [products, setProducts] = useState(null);
  const [isCategoryEnable, setCategoryEnable] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, isError } = cardData;

  // use effect dependency variable
  const dependency = data && data.length;

  // update product when new items added to data
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [dependency]);

  return (
    <div className={styles.shopPage}>
      <header>
        <Navbar cart={cart} />
      </header>
      <main>
        <aside>
          <SearchFilter
            searchText={searchText}
            setSearchText={setSearchText}
            products={products}
            setProducts={setProducts}
            isCategoryEnable={isCategoryEnable}
          />
          <ProductCategories
            setProducts={setProducts}
            allProducts={data}
            setCategoryEnable={setCategoryEnable}
            setSearchText={setSearchText}
          />
        </aside>
        <div>
          <SortFilter
            products={products}
            setProducts={setProducts}
            isCategoryEnable={isCategoryEnable}
          />
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
