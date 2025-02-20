import { useState, useEffect } from "react";
import SearchField from "./SearchField";
const SearchFilter = ({
  searchText,
  setSearchText,
  products,
  setProducts,
  isCategoryEnable,
}) => {
  const [initialProduct, setInitialProduct] = useState(null);

  const initialProductDependency = isCategoryEnable
    ? products && products.length > 0
      ? products[0].category
      : products && initialProduct[0].category
    : products && true;
  // filter product that match searchText

  useEffect(() => {
    if (searchText) {
      const filterProduct = initialProduct.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setProducts(filterProduct);
    } else if (initialProduct) {
      setProducts(initialProduct);
    }
  }, [searchText]);

  useEffect(() => {
    if (products) {
      setInitialProduct(products);
    }
  }, [initialProductDependency]);

  return (
    <SearchField
      text={searchText}
      setText={setSearchText}
      placeHolder="Search products.."
    />
  );
};
export default SearchFilter;
