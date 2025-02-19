import styles from "../styles/page/shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCards from "../components/ProductCards";
import ProductCategories from "../components/ProductCategories";
import SortFilter from "../components/SortFilter";
import SearchFilter from "../components/SearchFilter";
import { useEffect, useState } from "react";

const Shop = ({ cardData }) => {
  const [products, setProducts] = useState(null);
  const [isCategoryEnable, setCategoryEnable] = useState(null);
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
        <Navbar />
      </header>
      <main>
        <aside>
          <SearchFilter products={products} setProducts={setProducts} />
          <ProductCategories
            setProducts={setProducts}
            allProducts={data}
            setCategoryEnable={setCategoryEnable}
          />
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
