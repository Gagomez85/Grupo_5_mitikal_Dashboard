import React from "react";
import MitikalLastProduct from "./MitikalLastProduct";
import MitikalCategory from "./MitikalCategory";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <MitikalLastProduct />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <MitikalCategory />
    </div>
  );
}

export default ContentRowCenter;
