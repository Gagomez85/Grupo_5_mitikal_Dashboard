import React from "react";
import ChartRow from "./ChartRow";

let tableRowsData = [
  {
    name: "conjunto-allison",
    description: "Conjunto Allison",
    category: "Lenceria",
    color: "Negro",
    size: 1,
    price: 2000,
  },
  {
    name: "conjunto-olive",
    description: "Conjunto Olive",
    category: "Lenceria",
    color: "Hueso",
    size: 1,
    price: 2000,
  },
];

function Chart({description}) {
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Detalle</th>
              </tr>
            </tfoot>
            <tbody>
              {description.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
