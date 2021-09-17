import { useState, useEffect } from "react";
import CategoriesInDb from "./CategoriesInDb";

function MitikalCategory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/category/listCategoryTotal")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.category);
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <>{products.length > 0 ? <CategoriesInDb description={products} /> : ""}</>
  );
}

export default MitikalCategory;
