import styles from "../styles/components/productCard.module.css";
import Loading from "./Loading";

const ProductCard = ({ product, isLoading, isError }) => {
  if (isError)
    return (
      <div className={styles.product__error}>
        <p>Could not find this item.</p>
      </div>
    );
  if (isLoading)
    return (
      <div className={styles.product__loading}>
        <Loading />
      </div>
    );
  const { title, image, price } = product;
  return (
    <section className={styles.product__container}>
      <img className={styles.product__img} src={image} alt="" />
      <p className={styles.product_information}>
        <span className={styles.product__name}>{title}</span>
        <span className={styles.product__price}>${price}</span>
      </p>
    </section>
  );
};
export default ProductCard;
