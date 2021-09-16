import React from "react";

function GenresInDb({ name }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Modelos de Productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-danger text-white shadow">
                <div className="card-body">
                  {name ? (
                    name.map((item) => {
                      return <li> {item.name} </li>;
                    })
                  ) : (
                    <h2>No hay productos</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
