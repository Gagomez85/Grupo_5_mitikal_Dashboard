import React from "react";
import ChartRow from "./ChartRow";

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
                <th>Color</th>
                <th>Size</th>
                <th>Categoria</th>
                <th>Imagen</th>
                <th>Price</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Total</th>
                <th></th>
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
