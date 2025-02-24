import styles from "../styles/components/productSize.module.css";
const ProductSize = ({ productCategory, handleProductSizeBtn }) => {
  const clothingSize = ["S", "M", "L", "XL", "XXL"];

  const sizeBtn = productCategory.toLowerCase().includes("clothing")
    ? clothingSize.map((item, index) => (
        <button key={index} onClick={handleProductSizeBtn}>
          {item}
        </button>
      ))
    : null;

  return (
    sizeBtn && (
      <div className={styles.productSize__container}>
        <p>CHOOSE SIZE</p>
        <div className={styles.productSize__btns}>{sizeBtn}</div>
      </div>
    )
  );
};
export default ProductSize;
