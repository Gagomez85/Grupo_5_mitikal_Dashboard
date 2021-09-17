import { useState, useEffect } from "react";
import SmallCard from "./SmallCard"

function MitikalTotal() {
  const [totalProduct, setProducts] = useState([]);
  const [totalUser, setUsers] = useState([]);
  const [totalCategory, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.meta);
      })
      .catch((error) => console.error(error));
  }, []);
  
  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.meta);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3050/api/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.meta);
      })
      .catch((error) => console.error(error));
  }, []);

  return <>
          <div className="row">
            {totalProduct && <SmallCard cuantity={totalProduct.total}  
            name="Total de Productos"
            color="success"
            icon="fa-tshirt"
            /> }
            {totalUser && <SmallCard cuantity={totalUser.total}  
            name="Total de Usuarios"
            color="success"
            icon="fa-user"
            /> }
            {totalCategory && <SmallCard cuantity={totalCategory.total}  
            name="Total de Categorias"
            color="success"
            icon="fa-bars"
            /> }

          </div>
        </>;
}

export default MitikalTotal;
