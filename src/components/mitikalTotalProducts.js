import { useState, useEffect } from "react";
import ContentRowMovies from "./ContentRowMovies";

function MitikalCountProducts() {
  const [totales, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.meta);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(totales);
  return <>{totales.length > 0 ? <ContentRowMovies count={totales} /> : ""}</>;
}

export default MitikalCountProducts;
