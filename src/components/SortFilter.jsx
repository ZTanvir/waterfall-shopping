import SelectField from "./SelectField";
import { useEffect, useState } from "react";
import styles from "../styles/components/sortFilter.module.css";

const SortFilter = ({ products, setProducts, isCategoryEnable }) => {
  const [selectFilter, setSelectFilter] = useState("default");
  const [initialProduct, setInitialProduct] = useState(null);

  /* 
    Set initial product and select filter based on
    does the user in category section or not 
  */
  const productCategory = isCategoryEnable
    ? products && products[0].category
    : products && products.length;

  useEffect(() => {
    if (selectFilter === "default") {
      setProducts(initialProduct);
    } else if (selectFilter === "avg-rating") {
      let sortByRating = [...products].sort(
        (product1, product2) => product2.rating.rate - product1.rating.rate
      );
      setProducts(sortByRating);
    } else if (selectFilter === "price-low") {
      let sortByPriceAsc = [...products].sort(
        (product1, product2) => product1.price - product2.price
      );
      setProducts(sortByPriceAsc);
    } else if (selectFilter === "price-high") {
      let sortByPriceDsc = [...products].sort(
        (product1, product2) => product2.price - product1.price
      );
      setProducts(sortByPriceDsc);
    }
  }, [selectFilter]);

  useEffect(() => {
    // set filter product to Default sorting when product change
    // and store the unchanged product to initialProduct
    if (productCategory) {
      setSelectFilter("default");
      setInitialProduct(products);
    }
  }, [productCategory]);

  return (
    <div className={styles.shopFilter__wrapper}>
      <p className={styles.shopFilter__resultMsg}>
        Showing all {products && products.length} results
      </p>
      <SelectField fieldValue={selectFilter} setFieldValue={setSelectFilter}>
        <option value="default">Default sorting</option>
        <option value="avg-rating">Sort by average rating</option>
        <option value="price-low">Sort by price: low to high</option>
        <option value="price-high">Sort by price: high to low</option>
      </SelectField>
    </div>
  );
};
export default SortFilter;
