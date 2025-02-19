import { useState, useEffect, useRef } from "react";
import SearchField from "./SearchField";
const SearchFilter = ({ products, setProducts }) => {
  const [searchText, setSearchText] = useState("");
  const [initialProduct, setInitialProduct] = useState(null);

  // filter product that match searchText
  useEffect(() => {
    if (searchText) {
      const filterProduct = initialProduct.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );

      setProducts(filterProduct);
    } else {
      // set product to initial state
      //   setProducts(data);
    }
  }, [searchText]);

  useEffect(() => {
    if (products) {
      setInitialProduct(products);
    }
  }, [products && products.length && initialProduct && initialProduct.length]);

  console.log("products:", products);
  console.log("initial products:", initialProduct);
  console.log("search text", searchText);
  return (
    <SearchField
      text={searchText}
      setText={setSearchText}
      placeHolder="Search products.."
    />
  );
};
export default SearchFilter;
