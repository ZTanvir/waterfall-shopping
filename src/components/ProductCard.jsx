import styles from "../styles/components/productCard.module.css";
import Loading from "./Loading";
import { useLocation, Link } from "react-router";

const ProductCard = ({ product, isLoading, isError }) => {
  const pagePathName = useLocation().pathname;
  const checkPathName = String(pagePathName).toLowerCase().includes("shop");

  return (
    <section className={styles.product__container}>
      {isError && (
        <div className={styles.product__error}>
          <p>Could not find this item.</p>
        </div>
      )}
      {isLoading && (
        <div className={styles.product__loading}>
          <Loading />
        </div>
      )}
      {product && (
        <Link className={styles.productCard} to={`/shop/${product.id}`}>
          <div className={styles.productCard}>
            <img className={styles.product__img} src={product.image} alt="" />
            <p className={styles.product_information}>
              <span className={styles.product__name}>{product.title}</span>
              <span className={styles.product__price}>${product.price}</span>
            </p>
          </div>
        </Link>
      )}
      {/* Hide below card in shop page, only show on hover */}
      <div
        className={`${styles.belowCard} ${
          checkPathName && styles.hideBelowCard
        }`}
      ></div>
    </section>
  );
};
export default ProductCard;
