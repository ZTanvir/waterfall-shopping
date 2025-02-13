import productService from "../services/products";
import ProductCategory from "../components/ProductCategory";
import styles from "../styles/components/productCategories.module.css";
import Loading from "./Loading";

const ProductCategories = ({ setProduct }) => {
  const { data, isLoading, isError } = productService.getAllCategories();

  if (isLoading) return <Loading />;

  return (
    <section className={styles.all_product_container}>
      <p className={styles.title}>Categories</p>
      {data &&
        data.map((item) => (
          <ProductCategory
            key={item}
            categoryName={item}
            setProduct={setProduct}
          />
        ))}
    </section>
  );
};
export default ProductCategories;
