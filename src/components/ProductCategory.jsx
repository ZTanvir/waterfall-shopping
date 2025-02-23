import productService from "../services/products";
import styles from "../styles/components/productCategory.module.css";

const ProductCategory = ({
  categoryName,
  setProducts,
  setCategoryEnable,
  setSearchText,
  productCategories,
  setProductCategories,
}) => {
  const { data, isLoading, isError } =
    productService.getCategoryProducts(categoryName);

  if (isError)
    return (
      <div className={styles.product__wrapper}>
        <p>Error while processing the request,please refresh the page.</p>
      </div>
    );

  const handleProductClick = (e) => {
    // set all category checkbox value to false
    const updateProductCategories = {};
    for (let category in productCategories) {
      updateProductCategories[category] = false;
    }
    setProductCategories({
      ...updateProductCategories,
      [categoryName]: true,
    });
    setProducts(data);
    setCategoryEnable(true);
    setSearchText("");
  };

  return (
    <div className={styles.product__wrapper}>
      <input
        type="checkbox"
        name={categoryName}
        id={`${categoryName}-checkbox`}
        value={categoryName}
        checked={productCategories[categoryName] === true}
        onChange={handleProductClick}
      />
      <label htmlFor={`${categoryName}-checkbox`}>
        <span className={styles.product__name}>{data && categoryName}</span>
        <span className={styles.product__amount}>
          {data && `(${data.length})`}
        </span>
      </label>
    </div>
  );
};
export default ProductCategory;
