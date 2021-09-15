import { useState, useEffect } from "react";

function MitikalProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2> Listado Productos Mitikal Store</h2>
      <ul>
        {products.length === 0 && <p> Loading </p>}
        {products.map((product, i) => {
          return (
            <li key={i}>
              <h3>{product.name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MitikalProducts;
