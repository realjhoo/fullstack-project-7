import React from "react";

const image1 = "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg";
const image2 = "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg";
const image3 = "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg";
const image4 = "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg";

const PhotoContainer = () => (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      <li>
        <img src={image1} alt="" />
      </li>
      <li>
        <img src={image2} alt="" />
      </li>
      <li>
        <img src={image3} alt="" />
      </li>
      <li>
        <img src={image4} alt="" />
      </li>
      <li class="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    </ul>
  </div>
);
export default PhotoContainer;
