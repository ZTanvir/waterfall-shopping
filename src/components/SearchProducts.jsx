import { useState, useEffect } from "react";
import SearchField from "./SearchField";
const SearchProducts = ({ products, setProducts }) => {
  const [searchText, setSearchText] = useState("");
  const [initialProduct, setInitialProduct] = useState(null);
  console.log("search field:", products);

  // filter product that match searchText
  useEffect(() => {
    if (searchText) {
      const filterProduct = initialProduct.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log("search product:", filterProduct);

      setProducts(filterProduct);
    } else {
      // set product to initial state
      //   setProducts(data);
    }
  }, [searchText]);

  useEffect(() => {
    if (products && products.length > 0) {
      setInitialProduct(products);
    }
  }, [products && products.length]);

  return (
    <SearchField
      text={searchText}
      setText={setSearchText}
      placeHolder="Search products.."
    />
  );
};
export default SearchProducts;
