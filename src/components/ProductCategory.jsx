import productService from "../services/products";
import styles from "../styles/components/productCategory.module.css";

const ProductCategory = ({ categoryName, setProduct }) => {
  const { data, isLoading, isError } =
    productService.getCategoryProducts(categoryName);
  return (
    <div className={styles.product__wrapper}>
      <span className={styles.product__name}>{categoryName}</span>
      <span className={styles.product__amount}>({data && data.length})</span>
    </div>
  );
};
export default ProductCategory;
