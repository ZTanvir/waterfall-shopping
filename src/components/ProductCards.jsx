import ProductCard from "./ProductCard";
import styles from "../styles/components/productsCard.module.css";
const ProductCards = ({ products, isLoading, isError }) => {
  return (
    <div className={styles.products__wrapper}>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLoading={isLoading}
            isError={isError}
          />
        ))}
    </div>
  );
};
export default ProductCards;
