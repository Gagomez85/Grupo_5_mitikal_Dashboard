import React from "react";

function GenresInDb({ description }) {
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
            {description && description.length > 0 ? (
              description.map((item) => {
                return (
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-danger text-white shadow">
                      <div className="card-body">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-lg-6 mb-4">
                <div className="card bg-danger text-white shadow">
                  <div className="card-body">
                    <p>No Hay Productos Disponibles</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GenresInDb;
