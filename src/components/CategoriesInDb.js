import React from "react";
function CategoriesInDb({ description }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias
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
                        <p>{item.name}</p>
                        <p>{item.Total}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-lg-6 mb-4">
                <div className="card bg-danger text-white shadow">
                  <div className="card-body">
                    <p>No Hay Categorias Disponibles</p>
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
export default CategoriesInDb;
