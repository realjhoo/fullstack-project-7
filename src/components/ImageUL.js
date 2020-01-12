import React from "react";
import Image from "./Image";
import NoResults from "./NoResults";

const ImageUL = props => {
  const results = props.data;
  let images;
  if (results.length > 0) {
    images = results.map(image => (
      <Image url={image.images.fixed_height.url} key={image.id} />
    ));
  } else {
    images = <NoResults />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{images}</ul>
    </div>
  );
};

export default ImageUL;
