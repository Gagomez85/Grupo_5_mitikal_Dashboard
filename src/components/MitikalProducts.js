import { useState, useEffect } from "react";
import Chart from "./Chart";

function MitikalProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.products);
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <>{products.length > 0 ? <Chart description={products} /> : ""}</>
  );
}

export default MitikalProducts;
