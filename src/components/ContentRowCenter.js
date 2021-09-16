import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import MitikalProducts from "./mitikal_products";
import GenresInDb from "./GenresInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastMovieInDb />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <MitikalProducts />
      <GenresInDb />
    </div>
  );
}

export default ContentRowCenter;
