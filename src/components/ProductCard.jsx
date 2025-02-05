import styles from "../styles/components/productCard.module.css";

const ProductCard = ({ productImg, name, price }) => {
  return (
    <section className={styles.product__container}>
      <img className={styles.product__img} src={productImg} alt="" />
      <p className={styles.product_information}>
        <span className={styles.product__name}>{name}</span>
        <span className={styles.product__price}>${price}</span>
      </p>
    </section>
  );
};
export default ProductCard;
