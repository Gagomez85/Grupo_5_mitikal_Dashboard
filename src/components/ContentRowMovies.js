import React from "react";
import SmallCard from "./SmallCard";

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsinDB = {
  name: "Total de Usuarios",
  color: "primary",
  cuantity: 21,
  icon: "fa-clipboard-list",
};

/* <!-- Total awards --> */

let totalProducts = {
  name: " Total de Productos",
  color: "success",
  cuantity: 79,
  icon: "fa-tshirt",
};

/* <!-- Actors quantity --> */

let modelsQuantity = {
  name: "Total de Categorias",
  color: "warning",
  cuantity: 21,
  icon: "fa-female",
};

let cartProps = [productsinDB, totalProducts, modelsQuantity];

function ContentRowMovies() {
  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
