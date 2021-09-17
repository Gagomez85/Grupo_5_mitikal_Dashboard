import React from "react";
import MitikalLastProduct from "./MitikalLastProduct";
import MitikalProducts from "./MitikalProducts";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <MitikalLastProduct />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <MitikalProducts />
    </div>
  );
}

export default ContentRowCenter;
