import { useState, useEffect } from "react";
import LastProductInDb from "./LastProductInDb"

function MitikalLastProduct() {
  const [lastProduct, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data.products[data.data.products.length-1]);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(lastProduct)

  return <>
            
            {lastProduct && <LastProductInDb lastProduct={lastProduct}  
  
        /> }

        </>;
}

export default MitikalLastProduct;
