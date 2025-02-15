import SelectField from "./SelectField";
import { useEffect, useState } from "react";

const SortFilter = ({ products, setProducts }) => {
  const [selectFilter, setSelectFilter] = useState("default");
  const [a, setA] = useState(products);

  const productSize = products && products[0].id;

  useEffect(() => {
    if (selectFilter === "default") {
      console.log("update a");
      console.log("product value:", products);

      setA(products);
    }
    console.log("sort result:", selectFilter, products);
    console.log("initial product:", a);
  }, [selectFilter]);

  useEffect(() => {
    if (productSize) {
      console.log("Render sortFilter");
      setSelectFilter("default");
    }
  }, [productSize]);
  return (
    <div>
      <p>Showing all {products && products.length} results</p>
      <SelectField fieldValue={selectFilter} setFieldValue={setSelectFilter}>
        <option value="default">Default sorting</option>
        <option value="avg-rating">Sort by average rating</option>
        <option value="price-low">Sort by price:low to high</option>
        <option value="price-high">Sort by price:high to low</option>
      </SelectField>
    </div>
  );
};
export default SortFilter;
