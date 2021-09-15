import React from "react";

function ChartRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.color}</td>
      <td>{props.size}</td>
      <td>{props.price}</td>
    </tr>
  );
}
export default ChartRow;
