import React from "react";

function LastProductInDb({lastProduct}) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <p>
            Ultimo Producto Cargado
          </p>
          <h5 className="m-0 font-weight-bold text-gray-800">
            {lastProduct.name}
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={lastProduct.image}
              alt=" Mitikal "
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;
