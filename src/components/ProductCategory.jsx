import productService from "../services/products";
import styles from "../styles/components/productCategory.module.css";

const ProductCategory = ({ categoryName, setProduct }) => {
  const { data, isLoading, isError } =
    productService.getCategoryProducts(categoryName);

  if (isError)
    return (
      <div className={styles.product__wrapper}>
        <p>Error while processing the request,please refresh the page.</p>
      </div>
    );

  const handleProductClick = (e) => {
    setProduct(data);
  };
  return (
    <div onClick={handleProductClick} className={styles.product__wrapper}>
      <span className={styles.product__name}>{data && categoryName}</span>
      <span className={styles.product__amount}>
        {data && `(${data.length})`}
      </span>
    </div>
  );
};
export default ProductCategory;
