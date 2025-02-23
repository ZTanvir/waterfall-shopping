import productService from "../services/products";
import ProductCategory from "../components/ProductCategory";
import styles from "../styles/components/productCategories.module.css";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const ProductCategories = ({
  allProducts,
  setProducts,
  setCategoryEnable,
  setSearchText,
}) => {
  const { data, isLoading, isError } = productService.getAllCategories();
  const [productCategories, setProductCategories] = useState({});

  useEffect(() => {
    if (data) {
      const initialProductCategory = { everyProducts: true };
      data.forEach((category) => (initialProductCategory[category] = false));
      setProductCategories({ ...initialProductCategory });
    }
  }, [data && data.length]);

  const handleAllProducts = (e) => {
    const updateProductCategories = {};
    for (let category in productCategories) {
      updateProductCategories[category] = false;
    }
    setProductCategories({
      ...updateProductCategories,
      everyProducts: true,
    });
    setProducts(allProducts);
    setCategoryEnable(false);
    setSearchText("");
  };

  if (isLoading) return <Loading />;

  if (isError) return <div>Can't load due to an error.Please reload.</div>;

  return (
    <section className={styles.all_product_container}>
      <p className={styles.title}>Categories</p>

      <form>
        <div className={styles.all_product_category}>
          <input
            type="checkbox"
            name="all-products"
            id="products"
            checked={productCategories["everyProducts"] === true}
            value={"all-products"}
            onChange={handleAllProducts}
          />
          <label htmlFor="products">
            <span className={styles.all_product_title__name}>
              {allProducts && "All products"}
            </span>
            <span className={styles.all_product_amount}>
              {allProducts && ` (${allProducts.length})`}
            </span>
          </label>
        </div>
        {data &&
          data.map((item) => (
            <ProductCategory
              key={item}
              setCategoryEnable={setCategoryEnable}
              categoryName={item}
              setProducts={setProducts}
              setSearchText={setSearchText}
              productCategories={productCategories}
              setProductCategories={setProductCategories}
            />
          ))}
      </form>
    </section>
  );
};
export default ProductCategories;
