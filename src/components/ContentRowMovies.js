import React from "react";
import SmallCard from "./SmallCard";

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsinDB = {
  title: "Productos en Stock",
  color: "primary",
  cuantity: 21,
  icon: "fa-clipboard-list",
};

/* <!-- Total awards --> */

let totalProducts = {
  title: " Total Productos",
  color: "success",
  cuantity: "79",
  icon: "fa-award",
};

/* <!-- Actors quantity --> */

let modelsQuantity = {
  title: "Cantidad de Modelos de Lenceria",
  color: "warning",
  cuantity: "49",
  icon: "fa-user-check",
};

let cartProps = [productsinDB, totalProducts, modelsQuantity];

function ContentRowProducts() {
  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowProducts;
