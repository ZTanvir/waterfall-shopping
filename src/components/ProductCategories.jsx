import productService from "../services/products";
import ProductCategory from "../components/ProductCategory";
import styles from "../styles/components/productCategories.module.css";
import Loading from "./Loading";

const ProductCategories = ({ allProducts, setProducts, setCategoryEnable }) => {
  const { data, isLoading, isError } = productService.getAllCategories();

  if (isLoading) return <Loading />;
  const handleAllProducts = (e) => {
    setProducts(allProducts);
    setCategoryEnable(false);
  };

  return (
    <section className={styles.all_product_container}>
      <p className={styles.title}>Categories</p>
      <p onClick={handleAllProducts} className={styles.all_product_title}>
        <span className={styles.all_product_title__name}>
          {allProducts && "All products"}
        </span>
        <span className={styles.all_product_amount}>
          {allProducts && ` (${allProducts.length})`}
        </span>
      </p>
      {data &&
        data.map((item) => (
          <ProductCategory
            key={item}
            setCategoryEnable={setCategoryEnable}
            categoryName={item}
            setProducts={setProducts}
          />
        ))}
    </section>
  );
};
export default ProductCategories;
