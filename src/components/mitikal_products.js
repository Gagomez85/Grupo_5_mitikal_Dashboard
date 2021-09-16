import { useState, useEffect } from "react";
import GenresInDb from "./GenresInDb";

function MitikalProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return <div>{products.length < 0 ? <GenresInDb name={products} /> : ""}</div>;
}

export default MitikalProducts;
