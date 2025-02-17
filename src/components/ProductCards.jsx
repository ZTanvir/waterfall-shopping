import ProductCard from "./ProductCard";
import styles from "../styles/components/productsCard.module.css";
const ProductCards = ({ displayProducts, isLoading, isError }) => {
  return (
    <div className={styles.products__wrapper}>
      {displayProducts &&
        displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            displayProducts={product}
            isLoading={isLoading}
            isError={isError}
          />
        ))}
    </div>
  );
};
export default ProductCards;
